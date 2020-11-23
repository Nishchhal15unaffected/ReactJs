import React from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";
function Routing() {
    return (
        <Router>
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/users">users</Link>
                </li>
            </ul>
        </nav>
        </div>
        <Switch>
    <Route path="/about">
    <about></about>
    </Route>
    <Route path="/users">
    <users></users>
    </Route>
    <Route path="/">
    <home></home>
    </Route>
</Switch>
        </Router>
    )
}

function home(){
    return<h1>home </h1>
}
function about(){
    return<h1>about</h1>
}
function users(){
    return <h1>users</h1>
}





export default Routing
