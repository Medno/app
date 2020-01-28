import React from 'react';
import './App.css';
import Navigation from './components/shared/navigation.js'
import Footer from './components/shared/footer.js'
import Home from './components/home.js'
import Portfolio from './components/portfolio.js'
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header className="text-left">
            <Navigation />
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
