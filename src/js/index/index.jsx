import React, { Component } from 'react';


import { createStore } from 'redux'
import Counter from '../components'
import counter from '../reducers'

const store = createStore(counter);

class Index extends Component {
	render() {
		return (
			<Counter
				value={store.getState()}
				onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
				onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
			/>
		)
	}
}
export default Index;