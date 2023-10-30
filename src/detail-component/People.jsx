import React from "react";

function People(props) {
  return (
    <div>
      <img src={props.image} alt="#" />
      <div className="person">{props.title}</div>
    </div>
  );
}

export default People;
