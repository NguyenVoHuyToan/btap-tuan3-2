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
        {/* <div id='hidden'>
            <button className='hidden-button'>Product</button>
            <button className='hidden-button'>Marketing</button>
            <button className='hidden-button'>Engineering</button>
            <button className='hidden-button'>Design</button>
        </div> */}
        <div className='button-setting'>
            <button className='button-click'>Product</button>
            <button className='button-click'>Marketing</button>
            <button className='button-click'>Engineering</button>
            <button className='button-click'>Design</button>
        </div>
    </Cover>
  )
}

export default Setting