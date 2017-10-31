import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Page/Home/Home'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <Route exact path='/' component={Home} />
        </main>
      </div>
    );
  }
}
