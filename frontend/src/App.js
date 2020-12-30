import { Route } from "react-router-dom";
import React from "react";
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Header from './components/Header';
import {BrowserRouter , Switch}  from 'react-router-dom';
import Submit from  './screens/Submit'
import Profile from  './screens/Profile'
import Problems from  './screens/Problems'
import Run from  './screens/Run'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProblemsDetails from './components/ProblemsDetails'
function App() {
  return (
      <BrowserRouter>
      <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/problems' exact component={Problems} />
        <Route exact path='/problem/:id' component={ProblemsDetails} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/run' component={Run} />
        <Route exact path='/submit' component={Submit} />
      </Switch>
      </React.Fragment>
      </BrowserRouter>

  );
}

export default App;


