import PageDetailTitle from 'components/PageDetailTitle'
import Header from 'components/Header'
import React, { Component } from 'react'
import itemDetails from '../json/itemDetails.json'
import FeaturedImage from 'components/FeaturedImage'
import PageDetailDescription from 'components/PageDetailDescription'
import BookingForm from 'components/BookingForm'
import Testimoni from 'components/Testimoni'
import Footer from 'components/Footer'
import Categories from 'components/Categories'
import Fade from 'react-reveal'

export default class DetailPage extends Component {

  componentDidMount() {
    window.title = 'StayCation | Detail Page'
    window.scrollTo(0, 0)
  }

  render() {
    const breadcumbList = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Detail', pageHref: '' }
    ]
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle
          breadcrumb={breadcumbList}
          data={itemDetails}></PageDetailTitle>
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={itemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={itemDetails} />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={itemDetails.categories} />
        <Testimoni data={itemDetails.testimonial} />
        <Footer />
      </>
    )
  }
}
