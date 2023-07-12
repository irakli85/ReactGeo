import React from 'react'
import { styled } from 'styled-components'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <>
        <HeaderSt>
            <HeaderLogo/>
            <HeaderNav/>
        </HeaderSt>
    </>
  )
}

function HeaderLogo () {
    return(
        <DivSt>
            <img src={logo} alt="logo"/>
            <TextReactSt>React</TextReactSt>
        </DivSt>
    )
}

function HeaderNav(){
    return(
        <DivSt>
            <HeaderNavItemSt>დოკუმენტაცია</HeaderNavItemSt>
        </DivSt>
    )
}

const HeaderNavItemSt = styled.p`
    color: white;
    font-size: 1.6rem;
    cursor: pointer;
    height: 6rem;
    padding-top: 2rem;
    &:hover{
        color: #61dafb;
        border-bottom: solid 4px #61dafb;
    }
    
`

const DivSt = styled.div`
    display: flex;
    align-items: center;    
`

const TextReactSt = styled.span`
        color: #61dafb;
        margin-left: 1rem;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2rem;
`

const HeaderSt = styled.header`
    width: 100%;
    height: 6rem;
    background-color: #20232a;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    position: fixed;
`



export default Header