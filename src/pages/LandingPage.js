import React, { Component } from 'react'

import Header from 'components/Header'
import Hero from 'components/Hero'

import landingPageJSON from 'json/landingPage.json'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero data={landingPageJSON.hero} />
      </>
    )
  }
}

