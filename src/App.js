import React, { Component } from 'react'
import './App.css'
import Nav from './Components/Layout/Nav/Nav'
import Header from './Components/Layout/Header/Header'
import Footer from './Components/Layout/Footer/Footer'
import Ajax from './Components/Ajax/Ajax'

class App extends Component {
  render() {
    return (
      <div>
        <Header />,
        <Nav />,
        <Footer />,
        <Ajax />
      </div>
    )
  }
}

export default App
