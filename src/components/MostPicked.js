import Button from 'elements/Button'
import Fade from 'react-reveal/Fade';

import React from 'react'

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked} >
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <Fade bottom delay={500 * index}>
                <div key={index} className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light"> per {item.unit}</span>
                    </div>
                    <figure className="image-wrapper">
                      <img className="image-cover" src={item.imageUrl} alt={item.name} />
                    </figure>
                    <div className="meta-wrapper">
                      <Button type="link" href={`/property/${item._id}`} className="strecthed-link d-block text-white">
                        <h5>{item.name}</h5>
                      </Button>
                      <span>{item.city}, {item.country}</span>
                    </div>
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>
      </Fade>
    </section >
  )
}
