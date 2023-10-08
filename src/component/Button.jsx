import React, { useState } from "react";
import styled from "styled-components";
import DetailComponent from "../detail-component/DetailComponent";
import ShowComponent from "./ShowComponent";


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
