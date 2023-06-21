import React from 'react'
import './CustomInput.css'

function CustomInput(props) {
  return (
    <input type={props.type} name={props.name} id={props.id} className={props.className} placeholder={props.placeholder} />
  )
}

export default CustomInput