//不管是dev还是build，要是单页的话publicPath就要根目录，否则获取资源的时候，路径就会有问题，其他方法暂时还不知道
//多页面就./了
module.exports  = {
    prod_publicPath:"/"
}