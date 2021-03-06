import Button from 'elements/Button'
import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {
              category.items.length === 0 ?
                <div className="row align-items-center">No property :(</div> :
                category.items.map((item, index2) => {
                  return (
                    <div className="item column-3 row-1" key={`category-${index1}-item${index2}`}>
                      <Fade bottom delay={300 * index2}>
                        <div className="card">
                          {item.isPopular &&
                            (<div className="tag">
                              Popular
                              <span className="font-weight-light"> Choice</span>
                            </div>)}
                          <figure className="image-wrapper" style={{ height: 180 }}>
                            <img src={item.imageUrl} alt={item.name} className="image-cover" />
                          </figure>
                          <div className="meta-wrapper">
                            <Button type="link" className="strecthed-link d-block text-gray-800" href={`/property/${item._id}`}>
                              <h5>{item.name}</h5>
                            </Button>
                            <span className="text-gray-500">{item.city}, {item.country}</span>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  )
                })
            }
          </div>
        </Fade>
      </section>
    )
  })
}
