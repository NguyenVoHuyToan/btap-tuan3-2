import React, { useState } from "react";
import styled from "styled-components";
import DetailComponent from "../detail-component/DetailComponent";
import ShowComponent from "./ShowComponent";

export const UnderButton = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
function Button() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <UnderButton>
      <button onClick={handleClick} className="under-button">
        Create Socia{" "}
      </button>
      {show ? <DetailComponent /> : <ShowComponent />}
    </UnderButton>
  );
}

export default Button;
