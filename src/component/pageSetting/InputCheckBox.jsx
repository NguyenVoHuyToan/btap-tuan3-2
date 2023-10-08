import React from 'react'

function InputCheckBox(props) {
  return (
    <div>
        <input type = {props.inputType}/>
        <b>{props.title}</b>
    </div>
  )
}

export default InputCheckBox