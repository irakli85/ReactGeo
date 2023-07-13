import React, { useState } from 'react'
import arrow from '../assets/arrow.png'
import { styled } from 'styled-components'
import MCcontent from './MCcontent'

function MainConcepts() {
    const [clicked, setClicked] = useState(false)
    console.log(clicked)
    
  return (
    <ConceptDivSt>
        <ConceptDiv onClick={() => setClicked(!clicked)}>
            <ConceptTextSt>ძირითადი კონცეპციები</ConceptTextSt>
            <div><ConceptImgSt src={arrow} alt="arrow" dropdown={clicked}/></div>
        </ConceptDiv>
        {
            clicked ?
                <MCcontent/>
            :
            null
        }             
    </ConceptDivSt>
  )
}

const ConceptDivSt = styled.div`
    display: flex;
    flex-direction: column;
`
const ConceptDiv = styled.div`
    display: flex;
    align-items: center;
`

const ConceptTextSt = styled.p`
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

const ConceptImgSt = styled.img`
    transform: ${props => props.dropdown ? "rotate(180deg)" : null};
    transition: transform ease-in-out 0.5s;
`


export default MainConcepts