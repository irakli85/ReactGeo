import React from 'react'
import { styled } from 'styled-components'
import Content from './Content'
import Nav from './Nav'

function Section() {
  return (
    <SectionSt>
        <Content/>
        <Nav/>
    </SectionSt>
  )
}

const SectionSt=styled.section`
    width: 100%;
    height: auto;
    display: flex;
`

export default Section