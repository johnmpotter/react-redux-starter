/* @flow */
import React, { Component } from 'react'

import ShareButtons from '../../ShareButtons/ShareButtons'

import './SubscribeSuccess.css'

type Props = {
  email: String,
}

export default class SubscribeSuccess extends Component<Props> {
  render() {
    return (
      <div className='SubscribeSuccess'>
        <ShareButtons />
      </div>
    );
  }
}
