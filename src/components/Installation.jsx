import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Installation() {
   
  return (
    <InstallLinkSt to='/installation'>
        <InstallationTextSt >ინსტალაცია</InstallationTextSt>
    </InstallLinkSt>
  )
}


const InstallLinkSt = styled(Link)`
    margin-top: 8rem;
    display: flex;
    align-items: center
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