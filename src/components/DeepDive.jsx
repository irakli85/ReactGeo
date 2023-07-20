import React, {useState} from 'react'
import { styled } from 'styled-components'
import arrow from '../assets/white.svg'
import { ConceptImgSt } from './MainConcepts'


function DeepDive({text, children}) {
  const [clicked, setClicked] = useState(false)
  const [drop, setDrop] = useState(0)

  return (
    <DiveDivSt>
      <DiveH2St>{text}</DiveH2St>
      <DiveBtnSt onClick={() => {setClicked(!clicked); drop === 0 ? setDrop(1) : setDrop(0)}}>
        <div><ConceptImgSt src={arrow} alt="arrow" dropdown={drop}/></div>
        <DiveP>დეტალურად</DiveP>       
      </DiveBtnSt>
      {
            clicked ?
                children
            :
            null
        }      

    </DiveDivSt>
  )
}

const DiveDivSt = styled.div`
    display: flex;
    flex-direction: column;    
    margin-top: 6rem;
    background-color: #f3f4fd;
    padding: 3rem;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;    
`

const DiveBtnSt = styled.div`
  margin-top: 2rem;
  width: 18rem;
  height: 3.6rem;
  background-color: #575fb7;
  display: flex;
  justify-content: center;
  align-items: center;  
  border-radius: 9999px;
  cursor: pointer;  
`

const DiveP = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-left: 1rem;
`

const DiveH2St = styled.h2`
  color: #23272f;
  font-size: 2rem;
  font-weight: 700;
`


export default DeepDive