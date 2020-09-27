import React from 'react';
import { render } from '@testing-library/react'
import Button from './index'
import { BrowserRouter as Router } from 'react-router-dom'


test("Should not allowed to click if button is disabled", () => {
  const { container } = render(<Button isDisabled />)

  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading />)
  expect(getByText(/loading/i)).toBeInTheDocument()
  expect(container.querySelector('span')).toBeInTheDocument()
})

test("should be <a> tag", () => {
  const { container } = render(<Button type="link" isExternal ></Button>)
  expect(container.querySelector("a")).toBeInTheDocument()
})

test("should be <Link> tag", () => {
  const { container } = render(<Router><Button type="link" /></Router>)
  expect(container.querySelector("a")).toBeInTheDocument()
})
