import React from "react";
import styled from "styled-components";

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
