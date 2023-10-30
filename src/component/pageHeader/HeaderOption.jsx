import React from "react";

function HeaderOption(props) {
  return (
    <div>
      <select className="select">
        <option>{props.option}</option>
      </select>
    </div>
  );
}

export default HeaderOption;
