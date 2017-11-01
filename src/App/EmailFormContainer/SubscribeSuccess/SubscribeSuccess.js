/* @flow */
import React, { Component } from 'react'

import ShareButtons from '../../ShareButtons/ShareButtons'

import './SubscribeSuccess.css'

export default class SubscribeSuccess extends Component<{}> {
  render() {
    return (
      <div className='SubscribeSuccess'>
        <ShareButtons />
      </div>
    );
  }
}
