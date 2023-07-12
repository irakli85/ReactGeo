import React from 'react'
import { styled } from 'styled-components'
import Installation from './Installation'

function Nav() {
  return (
    <NavDivSt>
        <Installation/>
    </NavDivSt>
  )
}

const NavDivSt = styled.div`
    background-color: #f7f7f7;
    width: 20%;
    height: 100vh;
    overflow-y: scroll;
    padding-left: 2rem; 
    &::-webkit-scrollbar {
    display: none;    
}
   
`

export default Nav