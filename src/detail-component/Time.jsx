import React from "react";

function Time(props) {
  return (
    <div>
      <img src={props.image} alt="#" />
      <div className="time">{props.title}</div>
    </div>
  );
}

export default Time;
