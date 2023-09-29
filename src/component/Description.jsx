import React from 'react'
import styled from 'styled-components'

export const ThirdBox = styled.div`
    margin-left: 50px;
`
function Description() {
  return (
    <ThirdBox>
    <p>Description</p>
    <input className='des-input' type='text' placeholder='Description of your event'/>
</ThirdBox>
  )
}

export default Description