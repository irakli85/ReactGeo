import React from 'react'
import { styled } from 'styled-components'
import data from '../data'

function Article1Tip() {
  return (
    <TipDivSt>
        <TipH3St>რჩევა</TipH3St>
        <TipPst>{data.article1.text6}</TipPst>
    </TipDivSt>
  )
}

export const TipDivSt=styled.div`
    background-color: rgba(255,229,100,0.3);
    border-left:9px solid #ffe564;
    border-left-width: 9px;
    border-left-style: solid;
    padding: 20px 45px 20px 26px;
    margin-bottom: 30px;
    margin-top: 20px;
    margin-left: -30px;
    margin-right: -30px;
`

export const TipH3St = styled.h3`
  color: black;
  font-size: 1.7rem;
  font-weight: 800;
`

export const TipPst = styled.p`
  color: black;
  font-size: 1.7rem;
  margin-top: 1rem;
`

export default Article1Tip