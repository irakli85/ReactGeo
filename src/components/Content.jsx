import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { styled } from 'styled-components'
import HelloWorld from './HelloWorld'
import Installation from './Installation'

function Content() {
  return (
    <ContebtDivSt>lorem*4000
      <Routes>
        <Route path='/'/>
        <Route path='/HelloWorld' element={<HelloWorld/>}/>
      </Routes>
        
    </ContebtDivSt>
  )
}

const ContebtDivSt = styled.div`
    background-color: white;
    width:80%;
    height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
  display: none;
}
`

export default Content