import React from "react";
import styled from "styled-components";

export const ThirdBox = styled.div`
  margin-left: 50px;
`;
function Description(props) {
  return (
    <ThirdBox>
      <p>{props.title}</p>
      <input
        className="des-input"
        type={props.inputType}
        placeholder={props.placeholder}
      />
    </ThirdBox>
  );
}

export default Description;
