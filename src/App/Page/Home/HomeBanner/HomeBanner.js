/* @flow */
import React, { Component } from 'react'

import EmailFormContainer from '../../../EmailFormContainer/EmailFormContainer'

import './HomeBanner.css'

export default class HomeBanner extends Component {
  render() {
    return (
      <div className='HomeBanner'>
        <div className="HomeBanner--content">
          <h1 className="HomeBanner--title">Business Credibility<br/> on the Blockchain</h1>

          <div className="HomeBanner--action-container">
            <p className="HomeBanner--action-cta">Be the first to receive mission updates and announcements</p>
            <EmailFormContainer/>
          </div>
        </div>
      </div>
    );
  }
}
