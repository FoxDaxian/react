// import css from "../static/reset.css";


import React from 'react';
import { render } from 'react-dom'

import Index from './index/index.jsx'
import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(counter);


const test = () => render(
	<Index />,
	document.getElementById('app')
)
store.subscribe(test);


