import React from 'react'

function Address(props) {
  return (
    <div>
        <img src={props.image} alt='#'/>
        <div className='add'>{props.title}</div>
    </div>
  )
}

export default Address