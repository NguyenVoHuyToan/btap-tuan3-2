import React from "react";

function Time(props) {
  return (
    <div>
      <img src={props.image} />
      <div className="time">{props.title}</div>
    </div>
  );
}

export default Time;
