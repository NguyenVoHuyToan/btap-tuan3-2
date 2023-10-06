import React from 'react'
import styled from 'styled-components'

export const Block = styled.div`
    display: flex;
    gap: 20px;
`;
export const FirstBox = styled.div`
    width: 55%;
    height: 100%;
`;
export const SecondBox = styled.div`
    width: 40%;
    height: 500px;
    border: 2px dotted black;
    border-bottom-left-radius: 50px;
    margin-top: 30px;
`;
export const ThirdBox = styled.div`
    margin-left: 50px;
`
function Content() {
  return (
    <Block>
        <FirstBox>
            <div className='content-first-box'>
                <div className='h1'><h1>Untile</h1></div>
                <div className='h1-under'><h1>Event</h1></div>
                <div className='handle-input'>
                    <div className='input'>
                        <img className='content-img' src='https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-date.cf31b5b1.svg' width={30}/>
                        <input className='content-input' type='date'/>
                    </div>
                    <div className='input'>
                        <img className='content-img' src='https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-time.0e52cc09.svg' width={30}/>
                        <input className='content-input' type='time'/>
                    </div>
                </div>
                <div className='address'>
                    <img className='content-img' src='https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-address.634396fa.svg' width={20}/>
                    <input className='add-input' type='address' placeholder='Venus'/>
                </div>
                <div className='handle-input'>
                    <div className='person'>
                        <img src='https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-maxcacipi.35d06c6a.svg' width={20}/>
                        <input className='content-input' type='text' placeholder='Max capacity'/>
                    </div>
                    <div className='person'>
                        <img src='https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-cost.0cbac456.svg' width={20}/>
                        <input className='content-input' type='text' placeholder='Cost per person'/>
                    </div>
                </div>
            </div>
        </FirstBox>
        <SecondBox>
            <div className='content-second-box'>
                <div className='second-img'><img src='https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/banner.ed746733.svg'width={20}/></div>
                <input type='file' className='second-content'/>
            </div>
        </SecondBox>
    </Block>
  )
}

export default Content