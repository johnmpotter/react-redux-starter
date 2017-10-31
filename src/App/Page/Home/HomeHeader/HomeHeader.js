/* @flow */
import React, { Component } from 'react'

import './HomeHeader.css'
import logo from '../../../../images/novo_logo.png'

export default class HomeHeader extends Component {
  render() {
    return (
      <div className='HomeHeader'>
        <div className="HomeHeader--logo">
          <img src={logo} alt="novo logo" />
        </div>
      </div>
    );
  }
}
