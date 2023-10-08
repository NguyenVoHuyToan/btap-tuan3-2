import React from "react";

function People(props) {
  return (
    <div>
      <img src={props.image} />
      <div className="person">{props.title}</div>
    </div>
  );
}

export default People;
