import React from "react";

function Date(props) {
  return (
    <div>
      <img src={props.image} alt="#" />
      <div className="date">{props.title}</div>
    </div>
  );
}

export default Date;
