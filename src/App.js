import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './titlebar/TitleBar';
import HomePage from "./page/HomePage";

function App() {
  return (
      <div>
        <div className="header_bar_container" id="header_container">
          <TitleBar />
        </div>
          <div className="body" id={HomePage.getId()}>
              <HomePage />
          </div>

      </div>
  );
}

export default App;
