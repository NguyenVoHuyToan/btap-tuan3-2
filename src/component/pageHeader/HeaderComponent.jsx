import React from "react";
import Header, { HeaderImage, HeaderInfo } from "./Header";
import styled from "styled-components";
import HeaderOption from "./HeaderOption";

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;

function HeaderComponent() {
  return (
    <Block>
      <HeaderImage>
        <Header image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/header-logo.a4cff821.svg" />
      </HeaderImage>
      <HeaderInfo>
        <Header title="Blog" href="https://www.facebook.com/" />
        <Header title="Socials" href="https://www.facebook.com/" />
        <Header title="Past Socials" href="https://www.facebook.com/" />
        <HeaderOption option="Clubs" href="https://www.facebook.com/" />
        <Header title="Contact" href="https://www.facebook.com/" />
      </HeaderInfo>
    </Block>
  );
}

export default HeaderComponent;
