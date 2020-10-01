import React, { Component, useState } from 'react'

import Header from 'components/Header'
import Hero from 'components/Hero'
import MostPicked from 'components/MostPicked'
import Categories from 'components/Categories'
import Testimoni from 'components/Testimoni'

import landingPageJSON from 'json/landingPage.json'
import Footer from 'components/Footer'
import InputNumber from 'elements/Form/InputNumber'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef()
  }
  state = {
    value: '1'
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {

    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPageJSON.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPageJSON.mostPicked} />
        <Categories data={landingPageJSON.categories} />
        <Testimoni data={landingPageJSON.testimonial} />
        <Footer />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-auto">
              <InputNumber max={30} isSuffixPlural suffix=" night" onChange={this.handleChange} name="value" value={this.state.value} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

