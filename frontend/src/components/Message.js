import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({variant, childrem}) => {
  return (
    <Alert variant = {variant}>{childrem}</Alert>
  )
}

Message.defaultProps ={variant:'info'}

export default Message