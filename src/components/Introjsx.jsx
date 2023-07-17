import React from 'react'
import { styled } from 'styled-components'
import { H1styled, H2styled, Pstyled, LinkStyled, ImgDiv} from './HelloWorld'
import data from '../data'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import img13 from '../assets/13.png'
import img14 from '../assets/14.png'
import { TipDivSt, TipH3St, TipPst } from './Article1Tip'
import Nextpage from './Nextpage'

function Introjsx() {
  return (
    <IntroDivSt>
      <H1styled>გაცნობა JSX-თან</H1styled>
      <Pstyled>{data.article2.text1}</Pstyled>
      <ImgDiv><img src={img3} alt="img3" /></ImgDiv>
      <Pstyled>{data.article2.text2}</Pstyled>
      <Pstyled>{data.article2.text3}</Pstyled>
      <H2styled>რატომ JSX?</H2styled>
      <Pstyled>{data.article2.text4}</Pstyled>
      <Pstyled>{data.article2.text5}</Pstyled>
      <H2styled>JSX-ში მნიშვნელობების ჩასმა</H2styled>
      <Pstyled>{data.article2.text6}</Pstyled>
      <ImgDiv><img src={img4} alt="img4" /></ImgDiv>
      <Pstyled>{data.article2.text7}</Pstyled>
      <Pstyled>{data.article2.text8}</Pstyled>
      <ImgDiv><img src={img5} alt="img5" /></ImgDiv>
      <LinkStyled to='https://codepen.io/gaearon/pen/PGEjdG?editors=1010' target="_blank">სცადე CodePen-ზე</LinkStyled>
      <H2styled>JSX თვითონაც გამოსახულებაა</H2styled>
      <Pstyled>{data.article2.text9}</Pstyled>
      <ImgDiv><img src={img6} alt="img6" /></ImgDiv>
      <H2styled>JSX-ში ატრიბუტების გამოყენება</H2styled>
      <Pstyled>{data.article2.text10}</Pstyled>
      <ImgDiv><img src={img7} alt="img7" /></ImgDiv>
      <Pstyled>{data.article2.text11}</Pstyled>
      <ImgDiv><img src={img8} alt="img8" /></ImgDiv>
      <Pstyled>{data.article2.text12}</Pstyled>
      <TipDivSt>
            <TipH3St>საყურადღებო:</TipH3St>
            <TipPst>{data.article2.text13}</TipPst>
        </TipDivSt>
      <H2styled>JSX-ში შვილობილი კომპონენტების გამოყენება</H2styled>
      <Pstyled>{data.article2.text14}</Pstyled>
      <ImgDiv><img src={img9} alt="img9" /></ImgDiv>
      <Pstyled>{data.article2.text15}</Pstyled>
      <ImgDiv><img src={img10} alt="img10" /></ImgDiv>
      <H2styled>JSX გვიცავს ინექციური შეტევებისგან</H2styled>
      <Pstyled>{data.article2.text16}</Pstyled>
      <ImgDiv><img src={img11} alt="img11" /></ImgDiv>
      <Pstyled>{data.article2.text17}</Pstyled>
      <H2styled>JSX ჩვეულებრივი ობიექტებია</H2styled>
      <Pstyled>{data.article2.text18}</Pstyled>
      <Pstyled>{data.article2.text19}</Pstyled>
      <ImgDiv><img src={img12} alt="img12" /></ImgDiv>
      <ImgDiv><img src={img13} alt="img13" /></ImgDiv>
      <Pstyled>{data.article2.text20}</Pstyled>
      <ImgDiv><img src={img14} alt="img14" /></ImgDiv>
      <Pstyled>{data.article2.text21}</Pstyled>
      <Nextpage to='/rendering' text='ელემენტების რენდერი'/>
    </IntroDivSt>
  )
}

const IntroDivSt = styled.div`
    margin: 12rem 9rem 15rem 9rem;
`


export default Introjsx