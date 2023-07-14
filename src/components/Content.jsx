import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { styled } from 'styled-components'
import HelloWorld from './HelloWorld'
import ContentFooter from './ContentFooter'
import Introjsx from './Introjsx'
import InstalContent from './InstalContent'

function Content() {
  return (
    <ContebtDivSt>
      <Routes>
        <Route path='/'/>
        <Route path='/installation' element={<InstalContent/>}/>
        <Route path='/HelloWorld' element={<HelloWorld/>}/>
        <Route path='/introJSX' element={<Introjsx/>}/>
      </Routes>
      <ContentFooter/>
    </ContebtDivSt>
  )
}

const ContebtDivSt = styled.div`
    background-color: white;
    width:70%;
    height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
  display: none;
}
`

export default Content