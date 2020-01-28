import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/shared/header.js'
import Footer from './components/shared/footer.js'
import Home from './components/Home.js'
import Portfolio from './components/Portfolio.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
