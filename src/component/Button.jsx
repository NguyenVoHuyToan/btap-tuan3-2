import React from "react";


function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className="under-button">
        Create Socia
      </button>
    </div>
  );
}

export default Button;
