import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TitleBar from './titlebar/TitleBar';
import HomePage from "./page/HomePage";
import User from "./User";

function App() {

  const user = new User();
  return (
      <div>
        <div className="header_bar_container" id="header_container">
          <TitleBar user={user}/>
        </div>
          <div className="body" id={HomePage.getId()}>
              <HomePage />
          </div>

      </div>
  );
}

export default App;
