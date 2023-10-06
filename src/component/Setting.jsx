import React, { useState } from 'react'
import styled from 'styled-components'

export const Cover = styled.div`
    width: 800px;
    height: 100%;
    border-radius: 10px;
    border: 1px solid grey;
    background-color: white;
    margin-left: 50px;
    margin-top: -150px;

`

function Setting() {
    const [product, setProduct] = useState('')
    const [marketing, setMarketing] = useState('')
    const [engineer, setEngineer] = useState('')
    const [design, setDesign] = useState('')
  return (
    <Cover>
        <div className='setting'>Setting</div>
        <div className='checkbox'>
            <input type='checkbox'/>
            <b>I want to approve attendees</b>
        </div>
        <p className='p-setting'>Privacy</p>
        <div className='radio'>
            <div>
                <input type='radio'></input>
                <b>Public</b>
            </div>
            <div>
                <input type='radio'></input>
                <b>Curated Audience</b>
            </div>
            <div>
                <input type='radio'></input>
                <b>Community Only</b>
            </div>
        </div>
        <p className='p-setting'>Tag your social</p>
        <p className='p-setting'>Pick tags for our curation engine to work its magin</p>
        <div className='handle-setting'>
            {product && <div className='set-click'>
                <b>Product</b>
                <button onClick={() => setProduct('')} className='set-button-click'>X</button>
                </div>}
            {marketing && <div className='set-click'>
                <b>Marketing</b>
                <button onClick={() => setMarketing('')} className='set-button-click'>X</button>
                </div>}
            {engineer && <div className='set-click'>
                <b>Engineering</b>
                <button onClick={() => setEngineer('')} className='set-button-click'>X</button>
                </div>}
            {design && <div className='set-click'>
                <b>Design</b>
                <button onClick={() => setDesign('')} className='set-button-click'>X</button>
                </div>}
        </div>
        <div className='button-setting'>
            <button className='button-click' onClick={() => setProduct(!product)}>Product</button>
            <button className='button-click' onClick={() => setMarketing(!marketing)}>Marketing</button>
            <button className='button-click' onClick={() => setEngineer(!engineer)}>Engineering</button>
            <button className='button-click' onClick={() => setDesign(!design)}>Design</button>
        </div>
    </Cover>
  )
}

export default Setting