import React from 'react'
import styled from 'styled-components'

export const HeaderInfo = styled.div`
display: flex;
list-style: none;
gap: 30px;
margin-top: 20px;
padding-right: 50px;
text-decoration: none;   
`
export const HeaderImage = styled.div`
display: flex;
margin-left: 50px; 
margin-top: 15px;
`
export const Block = styled.div`
display: flex;   
justify-content: space-between;
text-decoration: none;
`


function Header() {
  return (
    <Block>
    <HeaderImage>
        <img src="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/header-logo.a4cff821.svg" width={150}></img>
    </HeaderImage>
    <HeaderInfo>
        <a href='#'><li>Blog</li></a>
        <a href='#'><li>Socials</li></a>
        <a href='#'><li>Past Socials</li></a>
        <a href='#'><li>Club</li></a>
        <a href='#'><li>Contact</li></a>
    </HeaderInfo>
</Block>
  )
}

export default Header