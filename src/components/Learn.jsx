import React from 'react'
import { styled } from 'styled-components'

function Learn({children}) {
  return (
    <LearnDiv>
        <LearnDiv2>
            <LearnP>ამ თავში ისწავლი</LearnP>
        </LearnDiv2>
        {children}
    </LearnDiv>
  )
}

const LearnDiv = styled.div`
    margin-top: 3rem;
    padding: 3.2rem;
    background-color: #f6f7f9;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
`

const LearnDiv2 = styled.div`
    display: flex;
    margin-bottom: 2rem;
`

const LearnP = styled.p`
    font-size: 2.4rem;
    color: black;
    font-weight: 800;
    margin-left: 1.5rem;
`

export default Learn;