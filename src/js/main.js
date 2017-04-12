import React from 'react';
import { render } from 'react-dom'

//引入组件
import View from "./components/view.jsx";

import { createStore } from "redux";
import { connect } from "react-redux";



render(
	<View />,
	document.getElementById('app')
)
