/* @flow */
import React, { Component } from 'react'

import HomeHeader from './HomeHeader/HomeHeader'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeFooter from './HomeFooter/HomeFooter'
import StarBackground from './StarBackground/StarBackground'

import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <HomeHeader />
        <HomeBanner />
        <HomeFooter />
        <StarBackground />
      </div>
    );
  }
}
