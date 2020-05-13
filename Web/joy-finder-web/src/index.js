import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Login from './pages/Login';
import IndexStyle from './index.css';
import MainPage from './pages/MainPage';
import Register from './pages/Register';
import HomePage from './pages/HomePage';

const routing = (
  <Router>
    <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/homepage" component={HomePage}/>
      </Switch>
  </Router>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);
