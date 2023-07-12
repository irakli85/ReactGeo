import React from 'react'
import { styled } from 'styled-components'

function Content() {
  return (
    <ContebtDivSt>lorem*4000
        
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