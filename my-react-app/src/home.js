import React from 'react';
import './home.css';
// import Contact from './contact'
// import Navbar from './navbar'
import logo from './logo.svg';
import './App.css';
import './index.css'

function App() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World
          </a>
        </header>
      </div>
    );
  }
/*
function home() {
    return (
        <>
            <Navbar />
            <div class="container, class " id="home">
                <div class="box">
                    <div>
                        <img src="../img/logo-ALTA-v2@2x.png" alt="logo"/>
                    </div>
                    <div>
                        <h1>Belajar React Bersama Alta</h1>
                    </div>
                </div>
            </div>
            <div class="polka-dot"></div>
            <Contact/>
        </>
    );
}
*/
export default App
//export default home
