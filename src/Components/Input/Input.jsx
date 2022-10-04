import React from 'react'
import './index.css'
const Input = (props) => {
  let uniqueClass = 'custom-input'
  switch (props.type) {
    case 'radio':
      uniqueClass = 'radio-custom-input'
      
      break;
      case 'button':
        uniqueClass = 'button-custom-input'
        
        break;
    default:
   uniqueClass = 'custom-input'

      break;
  }
  return (
    <input  className={uniqueClass} {...props} />
  )
}

export default Input