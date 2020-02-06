import React, { Component } from 'react'
import "./App.scss";
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/index';
import Tour from './components/Tour/Tour';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    )
  }
}

export default App

