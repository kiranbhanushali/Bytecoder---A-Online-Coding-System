import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import AddProblem from './screens/AddProblem'
import Home from './screens/Home'
import Login from './screens/Login'
import Problems from './screens/Problems'
import ProblemsDetails from './screens/ProblemsDetails'
import Profile from './screens/Profile'
import Register from './screens/Register'
import Submit from './screens/Submit'
require('dotenv').config()
function App() {
    document.title = 'Bytecoders'
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/problems" exact component={Problems} />
                    <Route
                        exact
                        path="/problem/:id"
                        component={ProblemsDetails}
                    />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/submit" component={Submit} />
                    <Route exact path="/addproblem" component={AddProblem} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App
