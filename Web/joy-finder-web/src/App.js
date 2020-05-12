import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import IndexStyle from './index.css';
import MainPage from './pages/MainPage'
import MainScreen from './pages/MainScreen'


function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/user" component={MainScreen}/>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
