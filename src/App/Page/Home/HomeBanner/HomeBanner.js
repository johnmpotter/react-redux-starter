/* @flow */
import React, { Component } from 'react'

import EmailFormContainer from '../../../EmailFormContainer/EmailFormContainer'

import './HomeBanner.css'

export default class HomeBanner extends Component<{}> {
  render() {
    return (
      <div className='HomeBanner'>
        <div className="HomeBanner--content">
          <h1 className="HomeBanner--title">Business Credibility<br/> on the Blockchain</h1>

          <div className="HomeBanner--action-container">
            <EmailFormContainer/>
          </div>
        </div>
      </div>
    );
  }
}
