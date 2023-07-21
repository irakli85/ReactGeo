import React from 'react'
import { styled } from 'styled-components'

function PicBox({src1, src2, text1, text2}) {
  return (
    <PicDiv>
        <PicDiv2>
            <PicImg src={src1} alt="src1" />
            <PicP>{text1}</PicP>
        </PicDiv2>
        <PicDiv2>
            <PicImg src={src2} alt="src2" />
            <PicP>{text2}</PicP>
        </PicDiv2>
    </PicDiv>
  )
}

const PicDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;    
`
const PicDiv2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;    
`
const PicP = styled.p`
    font-size: 1.7rem;
    color: #78839b;
    margin-top: 1.6rem;    
`
const PicImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`

export default PicBox