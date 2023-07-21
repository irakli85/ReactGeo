import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { styled } from 'styled-components'
import HelloWorld from './HelloWorld'
import ContentFooter from './ContentFooter'
import Introjsx from './Introjsx'
import InstalContent from './InstalContent'
import Home from './Home'
import Rendering from './Rendering'
import FirstComponent from './FirstComponent'
import ExportImport from './ExportImport'
import MoreJSX from './MoreJSX'
import JSinJSX from './JSinJSX'

function Content() {

  return (
    <ContebtDivSt>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/installation' element={<InstalContent/>}/>
        <Route path='/HelloWorld' element={<HelloWorld/>}/>
        <Route path='/introJSX' element={<Introjsx/>}/>
        <Route path='/rendering' element={<Rendering/>}/>
        <Route path='/components' element={<FirstComponent/>}/>
        <Route path='/import' element={<ExportImport/>}/>
        <Route path='/morejsx' element={<MoreJSX/>}/>
        <Route path='/jsinjsx' element={<JSinJSX/>}/>
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