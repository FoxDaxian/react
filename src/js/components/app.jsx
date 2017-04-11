import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from "./footer.jsx";

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default App;