import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleBar from './titlebar/TitleBar';
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage"
import User from "./User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import WhoAreWe from './page/WhoAreWe';
import FAQPage from './page/FAQPage';
import WhatsOn from './page/WhatsOn';
import Signposting from './page/Signposting';

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
             
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/about">
                <WhoAreWe />
              </Route>
              <Route path="/faq">
                <FAQPage />
              </Route>
              <Route path="/events">
                <WhatsOn user={user} />
              </Route>
              <Route path="/signposting">
                <Signposting />
              </Route>
              <Route path="/login">
                <LoginPage user={user} />
              </Route>
              <Route path="/logout">
                {user.logout()}
                <Redirect to="/home" />
              </Route>

              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </Switch>
        </div>
      </Router>
      </div>
  );
}

export default App;
