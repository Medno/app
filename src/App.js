import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/shared/header.js'
import Footer from './components/shared/footer.js'
import Home from './components/home.js'
import Portfolio from './components/portfolio.js'

class App extends React.Component {
  render() {
    return (
	<BrowserRouter basename="/app" >
  <div className="App" id="page-container">
          <Header />
          <div id="content-wrap">

          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          </div>
          <Footer />
      </div>
      	</BrowserRouter>

    );
  }
}

export default App;
