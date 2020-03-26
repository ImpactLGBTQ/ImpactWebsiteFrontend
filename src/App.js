import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleBar from './titlebar/TitleBar';
import HomePage from "./page/HomePage";
import User from "./User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const user = new User();
  return (
      <div>
      <Router>
        <div className="header_bar_container" id="header_container">
          <TitleBar user={user}/>
        </div>
          <div className="body" id={HomePage.getId()}>
          <Switch>
              <Route>
                <HomePage />
              </Route>
              <Route path="/home">
                  <HomePage />
              </Route>
                    
            </Switch>
        </div>
      </Router>
      </div>
  );
}

export default App;
