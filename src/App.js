import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/shared/navigation.js'
import Footer from './components/shared/footer.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <header className="text-left">
          <Navigation />

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
              Learn React
            </a>
          </header>
          <Footer />
      </div>
    );
  }
}

export default App;
