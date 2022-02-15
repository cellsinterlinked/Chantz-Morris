import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { isExportDeclaration } from 'typescript';
import Personal from './Personal';
import Survey from '../Survey';
import App from '../../App';

const typeIntoForm = ({ name, address, phone, email }) => {
  const nameInputElement = screen.getByLabelText(/full name/i)
  const addressInputElement = screen.getByLabelText(/address/i)
  const phoneInputElement = screen.getByLabelText(/phone number/i)
  const emailInputElement = screen.getByLabelText(/email/i)

  if (name) {
    userEvent.type(nameInputElement, name)
  }
  if (address) {
    userEvent.type(addressInputElement, address)
  }
  if (phone) {
    userEvent.type(phoneInputElement, phone)
  }
  if (email) {
    userEvent.type(emailInputElement, email)
  }
  return {
    nameInputElement,
    addressInputElement,
    phoneInputElement,
    emailInputElement
  }
}

const clickNextBtn = () => {
  const nextBtnElement = screen.getByRole('button', {name: /submit/i});
  userEvent.click(nextBtnElement)
}

describe("Personal Survey", () => {
  beforeEach(() => {
    render(<App>
      <Survey>
        <Personal />
      </Survey>
    </App>)
  })

  test('Inputs should be initially empty', () => {
  const nameInputElement = screen.getByLabelText(/full name/i)
  const addressInputElement = screen.getByLabelText(/address/i)
  const phoneInputElement = screen.getByLabelText(/phone number/i)
  const emailInputElement = screen.getByLabelText(/email/i)

  expect(nameInputElement).toBe("")
  expect(addressInputElement).toBe("")
  expect(phoneInputElement).toBe("")
  expect(emailInputElement).toBe("")
  })





})
