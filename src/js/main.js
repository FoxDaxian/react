import "../css/index.scss";
import "../static/reset.css";

import click from "./a.js";

import arr from "./b.js";

import React from 'react';
import ReactDom from 'react-dom';

import component from './index.jsx'
console.log(component);
	


console.log(`now_env是区分环境的全局环境变量：${now_env}`);

window.onload = function() {
	let btn = document.querySelector('.btn');
	btn.onclick = click;
	arr();
}