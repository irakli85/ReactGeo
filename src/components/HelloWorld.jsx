import React from 'react'
import { styled } from 'styled-components'
import data from '../data'
import img1 from '../assets/1.png'
import { Link } from 'react-router-dom'
import Article1Tip from './Article1Tip'
import Nextpage from './Nextpage'
import {useEffect} from 'react';

function HelloWorld() {
  

   useEffect(() => {
    window.scrollTo(0, 0);
    console.log('start')
  }, []);
  
  return (
    <HelloWorldDivSt>
      <H1styled>Hello World</H1styled>
      <Pstyled>{data.article1.text1}</Pstyled>
      <ImgDiv><img src={img1} alt="img1" /></ImgDiv>
      <Pstyled>{data.article1.text2}</Pstyled>
      <LinkStyled to='https://codepen.io/gaearon/pen/MjrdWg?editors=1010' target="_blank">სცადე CodePen-ზე</LinkStyled>
      <Pstyled>{data.article1.text3}</Pstyled>
      <LineSt/>
      <H2styled>{data.article1.text4}</H2styled>
      <Pstyled>{data.article1.text5}</Pstyled>
      <Article1Tip/>
      <Pstyled>{data.article1.text7}</Pstyled>
      <Pstyled>{data.article1.text8}</Pstyled>
      <Pstyled>{data.article1.text9}
        <LinkStyled2 to='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview' target="_blank">მასალებს.</LinkStyled2>
      </Pstyled>
      <Nextpage to='/introJSX' text='JSX-თან გაცნობა'/>      
    </HelloWorldDivSt>
  )
}

const HelloWorldDivSt = styled.div`
  margin: 12rem 9rem 15rem 9rem;
`

export const H1styled = styled.h1`
  font-size: 6rem;
  color: #282c34;
  padding: 1.5rem;
`

export const H2styled = styled.h2`
  margin-top: 5rem;
  font-size: 3.5rem;
  color: #282c34;
  padding: 1.5rem;
`

export const ImgDiv = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  background-color: rgb(40, 44, 52);
  border-radius: 1rem;
  padding: 1.5rem;
`

export const Pstyled = styled.p`
  margin-top: 1rem;
  padding: 1.5rem;
  font-size: 1.5rem;
`

export const LinkStyled = styled(Link)`
  display: inline-block;
  font-size: 1.7rem;
  background-color: rgba(187,239,253,0.3);
  border-bottom: 1px solid rgba(0,0,0,0.2);
  color: #1a1a1a;
  line-height: 1.7;
  font-weight: 800;
  margin-left: 1.5rem;
  margin-top: 2rem;
`

export const LinkStyled2 = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  color: black;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

export const SpanBoldSt = styled.span`
    font-size: 1.5rem;
    font-weight: 800;
    color: black;
`

export const LineSt = styled.div`
  height: 1px;  
  background-color: #ececec;
  margin-top: 4.4rem;
  margin-bottom: 4rem;
`

export default HelloWorld