import React, {useEffect} from 'react'
import { styled } from 'styled-components'
import { H1styled, H2styled, Pstyled, LinkStyled, ImgDiv, LineSt} from './HelloWorld'
import data from '../data'
import { TipDivSt, TipH3St, TipPst } from './Article1Tip'
import Nextpage from './Nextpage'
import img3 from '../assets/3.png'
import img15 from '../assets/15.png'
import img16 from '../assets/16.png'
import img17 from '../assets/17.png'
import tick from '../assets/tick.gif'


function Rendering() {
  useEffect(() => {    
    let el = document.getElementById('render')
    console.log(el)
    el.scrollIntoView()    
  }, []);  
  
  return (
    <RendDivSt id='render'>
      <H1styled>ელემენტების რენდერი</H1styled>
      <Pstyled>{data.article3.text1}</Pstyled>
      <Pstyled>{data.article3.text2}</Pstyled>
      <ImgDiv><img src={img3} alt="img3" /></ImgDiv>
      <Pstyled>{data.article3.text3}</Pstyled>
      <TipDivSt>
            <TipH3St>შენიშვნა:</TipH3St>
            <TipPst>{data.article3.text4}</TipPst>
      </TipDivSt>
      <LineSt/>
      <H2styled>ელემენტის რენდერი DOM-ში</H2styled>
      <Pstyled>{data.article3.text5}</Pstyled>
      <ImgDiv><img src={img15} alt="img15" /></ImgDiv>
      <Pstyled>{data.article3.text6}</Pstyled>
      <Pstyled>{data.article3.text7}</Pstyled>
      <Pstyled>{data.article3.text8}</Pstyled>
      <ImgDiv><img src={img16} alt="img16" /></ImgDiv>
      <LinkStyled to='https://codepen.io/gaearon/pen/edyBaE?editors=1010' target="_blank">სცადე CodePen-ზე</LinkStyled>
      <Pstyled>{data.article3.text9}</Pstyled>
      <LineSt/>
      <H2styled>ვებ-გვერდზე ელემენტების განახლება</H2styled>
      <Pstyled>{data.article3.text10}</Pstyled>
      <Pstyled>{data.article3.text11}</Pstyled>
      <Pstyled>{data.article3.text12}</Pstyled>
      <ImgDiv><img src={img17} alt="img17" /></ImgDiv>
      <LinkStyled to='https://codepen.io/gaearon/pen/gwoJeZ?editors=1010' target="_blank">სცადე CodePen-ზე</LinkStyled>
      <Pstyled>{data.article3.text13}</Pstyled>
      <TipDivSt>
            <TipH3St>შენიშვნა:</TipH3St>
            <TipPst>{data.article3.text14}</TipPst>
      </TipDivSt>
      <H2styled>{data.article3.text15}</H2styled>
      <Pstyled>{data.article3.text16}</Pstyled>
      <Pstyled>{data.article3.text17}</Pstyled>
      <img src={tick} alt="tick" />
      <Pstyled>{data.article3.text18}</Pstyled>
      <Nextpage to='/components' text='პირველი კომპონენტი'/>
    </RendDivSt>
  )
}

const RendDivSt = styled.div`
  margin: 12rem 9rem 15rem 9rem;
`

export default Rendering