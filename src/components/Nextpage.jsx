import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Nextpage({to, text}) {
  return (
    <NextPageDivSt>
        <NextPageP>შემდეგი თავი</NextPageP>
        <NextPageLinkSt to={to} >{text}</NextPageLinkSt>
    </NextPageDivSt>
  )
}

const NextPageDivSt = styled.div`
    margin-top: 5rem;    
`

const NextPageP = styled.p`
    font-size: 1.4rem;
    color: #61dafb;
    font-weight: 900;
`

const NextPageLinkSt = styled(Link)`
    color: black;
    display: inline;
    border-color: #6B6B6B;
    transition: border-color 0.2s ease;
    font-size: 3rem;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    text-decoration: none;
    background-color: transparent;
`

export default Nextpage