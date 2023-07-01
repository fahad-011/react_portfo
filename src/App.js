import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <Home />
         <About/>
         <Technologies/>
         <Project/>
         <Footer/> 
      </div>
    );
  }
}

export default App;
