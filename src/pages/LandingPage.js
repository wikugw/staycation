import React, { Component } from 'react'

import Header from 'components/Header'
import Hero from 'components/Hero'
import MostPicked from 'components/MostPicked'
import Categories from 'components/Categories'
import Testimoni from 'components/Testimoni'

import landingPageJSON from 'json/landingPage.json'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef()
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPageJSON.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPageJSON.mostPicked} />
        <Categories data={landingPageJSON.categories} />
        <Testimoni data={landingPageJSON.testimonial} />
      </>
    )
  }
}

