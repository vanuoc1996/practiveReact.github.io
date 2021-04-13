import './css/App.css';
import './css/flex.css';
import React from 'react'
import Menu from './menu'
import Left from './Web/Left/Left'
import NavTop from './Web/Top/navTop'
import Main from './Web/Main/Main'
import { Switch, Link, Route } from "react-router-dom"

function App() {
  return (
    <div className="home1" id="home1">
      <NavTop />
      <Left />
      <div className="flex1">
        <div className="flex2">
          <Menu />
          <Main />
        </div>
        {/* ---------------------footer----------------------- */}
        <div className="footer , center">
          * ---------------------footer----------------------- *
        </div>
      </div>
    </div>

  );
}
export default App;
