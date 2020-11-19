import React from "react";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import TodoApp from "./component/Todo/TodoApp";
import {BrowserRouter as Router,Route} from "react-router-dom"

const App = () => {
    return (
            <Router>
                <Header/>
                <Route path="/" exact component={TodoApp}/>
                <Route path="/about" component={About}/>
            </Router>
    );
};

export default App;