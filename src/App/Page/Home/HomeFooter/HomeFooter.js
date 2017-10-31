/* @flow */
import React, { Component } from 'react'
import './HomeFooter.css'

import logoSquare from '../../../../images/novo_logo_square.png'

export default class HomeFooter extends Component {
  render() {
    return (
      <div className='HomeFooter'>
        <div className="HomeFooter--logo">
          <img src={logoSquare} alt="square novo logo" />
        </div>
      </div>
    );
  }
}
