import React from 'react'
import styled from 'styled-components'

export const UnderButton = styled.div`
    margin-left: 50px;
`;
function Button() {
  return (
    <UnderButton>
        <button className='under-button'>Create Social</button>
    </UnderButton>
  )
}

export default Button