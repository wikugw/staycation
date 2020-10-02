import React from 'react';
import { render } from '@testing-library/react'
import BreadCrumb from './index'
import { BrowserRouter as Router } from 'react-router-dom'

const setup = () => {
  const breadcumbList = [
    { pageTitle: 'Home', pageHref: '' },
    { pageTitle: 'House Detail', pageHref: '' }
  ]

  const { container } = render(
    <Router>
      <BreadCrumb data={breadcumbList} />
    </Router>
  )

  const breadcrumb = container.querySelector('.breadcrumb')

  return {
    breadcrumb
  }
}

test('should have ol with className breadcrumb and have texthome & house details', () => {
  const breadcrumb = setup()

  expect(breadcrumb).toHaveTextContent('Home')
  expect(breadcrumb).toHaveTextContent('House Detail')
})