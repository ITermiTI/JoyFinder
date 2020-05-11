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
import MainPage from './pages/MainPage'

const routing = (
  <Router>
    <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
  </Router>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);
