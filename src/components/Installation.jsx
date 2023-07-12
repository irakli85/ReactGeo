import React, { useState } from 'react'
import { styled } from 'styled-components'
import arrow from '../assets/arrow.svg'

function Installation() {
   
  return (
    <InstallationDivSt>
        <InstallationTextSt onClick={() => setClicked(!clicked)}>ინსტალაცია</InstallationTextSt>
        <img src={arrow} alt="arrow" />
        
    </InstallationDivSt>
  )
}


const InstallationDivSt = styled.div`
    margin-top: 8rem;
    display: flex;
`
const InstallationTextSt = styled.p`
    padding-right: 7px;
    padding-left: 7px;
    color: #6B6B6B;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 3;
    text-transform: uppercase;
    text-align: start;
    letter-spacing: 0.08em;
    &:hover{
        color: black;
        cursor: pointer;
    }
`

export default Installation