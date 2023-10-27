import React from 'react'
import { Alert as AlertB } from 'react-bootstrap';

const Alert = ({mensaje, color}) => {
  return (
    <AlertB className='alert' variant={color}>
          {mensaje}
        </AlertB>
  )
}

export default Alert