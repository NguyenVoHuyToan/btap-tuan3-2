import React, { useState } from 'react';
import styled from 'styled-components';
import DetailComponent from '../detail-component/DetailComponent';

export const UnderButton = styled.div`
    margin-left: 50px;
`;
function Button() {
  const [show, setShow] = useState('')

  return (
    <UnderButton>
        <button onClick={() => setShow(!show)} className='under-button'>Create Socia </button>
        {show && <DetailComponent/>}
    </UnderButton>
  )
}

export default Button