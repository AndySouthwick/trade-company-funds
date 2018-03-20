import React, { Component } from 'react';
import './App.css';
import Navigation from './components/NavBarWhite'
import HeroBar from './components/heroBar'
import SectionOne from './components/sectionOne'
class App extends Component {
  render() {
    return (
      <div>

        <Navigation/>
        <HeroBar/>
        <SectionOne/>

      </div>
    );
  }
}

export default App;
