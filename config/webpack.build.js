"use strict";//否则let报错
//使用merge
const webpackMerge = require('webpack-merge');
//引入通用配置
const base_config = require("./base.js");
const webpack = require('webpack');
const path = require('path');


const ExtractTextPlugin = require("extract-text-webpack-plugin");//提取出css生成css文件

//因为从js中分离出css的话，被分离出的js 和 分离出的css的 hash一样，以js为准，所以使用contenthash，[contenthash] 是 extract-text-webpack-plugin提供的另一种hash值，意为：文本内容的hash值，用来区分js文件的hash值
const css_extract = new ExtractTextPlugin({
	filename: "static/css/css.[contenthash:5].css"
});
const scss_extract = new ExtractTextPlugin({
	filename: "static/css/scss.[contenthash:5].css"
});

const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html


process.noDeprecation = true; //去除一个现在无关紧要的警告


let config = webpackMerge(base_config, {
	//决定map文件的模式
	devtool: "source-map",
	output: {
		chunkFilename: 'static/js/[name].[chunkhash:5].chunk.js'//为了按需加载组件
	},
	module: {
		rules: [{//处理css不带css-module
			test: /\.css$/,
			include: [path.resolve(__dirname, "../src/static/")],
			use: css_extract.extract({
				fallback: "style-loader",
				use: [{
					loader: "css-loader"
				}, {
					loader: "postcss-loader"
				}]
			})
		}, {//处理scss不带css-module
			test: /\.scss$/,
			include: [path.resolve(__dirname, "../src/static/")],
			use: scss_extract.extract({
				fallback: "style-loader",
				use: [{
					loader: "css-loader"
				}, {
					loader: "postcss-loader"
				}, {
					loader: "sass-loader"
				}]
			})
		}, {//处理css
			test: /\.css$/,
			exclude: [path.resolve(__dirname, "../src/static/")],//根据优先级
			use: css_extract.extract({
				fallback: "style-loader",
				use: [{
					loader: "css-loader",
					//是否需要一个全局默认样式或者一个自己自定义的样式？
					//如果需要的话，就要exclude出去，因为该插件会扩展类名
					//所以只要有类名就会进行转换，就不起作用了
					options: {//模块化css
						modules: true,
						localIdentName: '[path][name]__[local]--[hash:base64:5]'
					}
				}, {
					loader: "postcss-loader"
				}]
			})
		}, {//处理scss
			test: /\.scss$/,
			exclude: [path.resolve(__dirname, "../src/static/")],//根据优先级
			use: scss_extract.extract({
				fallback: "style-loader",
				use: [{
					loader: "css-loader",
					options: {//模块化css
						modules: true,
						localIdentName: '[path][name]__[local]--[hash:base64:5]'
					}
				}, {
					loader: "postcss-loader"
				}, {
					loader: "sass-loader"
				}]
			})
		}]
	},
	plugins: [
		//分离第三方插件库，因为第三方插件库总是不变的，所以让浏览器缓存他，提高速度
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module) {
				// 该配置假定你引入的 vendor 存在于 node_modules 目录中
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		//相当于给生成的vendor再次包裹一层，每次打包改变的是mainifest，防止vendor的hash改变
		//详见https://doc.webpack-china.org/guides/code-splitting-libraries/
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		//压缩JS文件
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			sourceMap: true//不能少，不然不生成map，得配合devTool
		}),
		//html插件
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../index.html"),
			title: "webpack-native",
			filename: 'index.html',
			inject: true,
			minify: {//更多配置选项：https://github.com/kangax/html-minifier#options-quick-reference
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				minifyCSS: true,
				minifyJS: true
			}
		}),
		css_extract, scss_extract
	]
});
module.exports = config;
