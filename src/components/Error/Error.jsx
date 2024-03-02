import React from 'react'
import error_img from '../../Assets/system.png'
import "../Error/Error.css"
const Error = ({errMsg}) => {
  return (
    <div>
      <h2 className='error-message'>{ errMsg }</h2>
      <p className='error-comment'>Try again</p>
      <img alt="Error message picture" src={ error_img } className='error-image' />
    </div>
  )
}

export default Error
