import React from "react";
import styled from "styled-components";

export const HeaderInfo = styled.div`
  display: flex;
  list-style: none;
  margin-top: 20px;
  padding-right: 20px;
  gap: 20px;
`;
export const HeaderImage = styled.div`
  display: flex;
  margin-left: 25px;
  margin-top: 15px;
`;
export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;

function Header(props) {
  return (
    <Block>
      <HeaderImage>
        <img src={props.image}></img>
      </HeaderImage>
      <HeaderInfo>
        <a href="#">
          <li>{props.title}</li>
        </a>
      </HeaderInfo>
    </Block>
  );
}

export default Header;
