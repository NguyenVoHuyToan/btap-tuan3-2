import React from "react";

function Input(props) {

  return (
    <div>
      <img className="content-img" src={props.image} alt="#" />
      <input
        className="content-input"
        type={props.inputType}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
