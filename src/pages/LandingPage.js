import React, { Component, useState } from 'react'

import Header from 'components/Header'
import Hero from 'components/Hero'
import MostPicked from 'components/MostPicked'
import Categories from 'components/Categories'
import Testimoni from 'components/Testimoni'

import landingPageJSON from 'json/landingPage.json'
import Footer from 'components/Footer'
import InputDate from 'elements/Form/InputDate'
import Breadcrumb from 'elements/Breadcrumb'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef()
  }
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    const breadcumbList = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Detail', pageHref: '' }
    ]
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
              <Breadcrumb data={breadcumbList} />
              {/* <InputDate
                max={30}
                onChange={this.handleChange}
                name='value'
                value={this.state.value} /> */}
              {/* <InputNumber max={30} isSuffixPlural suffix=" night" onChange={this.handleChange} name="value" value={this.state.value} /> */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

