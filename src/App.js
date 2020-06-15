import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Category from './components/Category';
import Products from './components/Products';
import Login, { fakeAuth } from './components/Login';
import Admin from './components/Admin';





function App() {
  return (
    <div className="App">
    <Router>
    <Navigation/>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/category" component={Category}/>
      <Route path="/products" component={Products}/>
      <Route path="/login" component={Login}/>
      <Admin auth ={fakeAuth.isAuthenticated} path="/admin" component={Admin}/>
      
    </Switch>
    </Router>
     
    </div>
  );
}

export default App;