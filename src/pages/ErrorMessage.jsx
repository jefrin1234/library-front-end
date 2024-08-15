import React from 'react'

function ErrorMessage(props) {
  const { type, field, message } = props

  let errorMessage = message; // Use the message from validation if provided
  console.log(type)

  if (type === 'maxLength') {
    errorMessage = `${field} is too long`
  } else if (type === 'required') {
    errorMessage = `${field} is required`
  } else if (type === 'pattern' && field === 'password') {
    errorMessage = `Password must be at least 6 characters`
  } else if (type === 'validate') {
    errorMessage = message; // For custom validation messages
  }

  return (
    <span>{errorMessage}</span>
  )
}

export default ErrorMessage
