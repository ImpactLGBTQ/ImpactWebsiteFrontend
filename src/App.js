// Copyright (C) 2020 Natasha England-Elbro
// 
// This file is part of ImpactWebsiteFrontend.
// 
// ImpactWebsiteFrontend is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// ImpactWebsiteFrontend is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with ImpactWebsiteFrontend.  If not, see <http://www.gnu.org/licenses/>.

import React from 'react';
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
import Footer from './footer/Footer';

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
            <Footer />
        </div>
      </Router>
      </div>
  );
}

export default App;
