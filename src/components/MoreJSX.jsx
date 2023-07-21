import React, {useEffect, useState} from 'react'
import { styled } from 'styled-components'
import { H1styled, H2styled, H3styled, Pstyled, Pstyled1, ImgDiv1, ImgDiv2, ImgDiv3, LinkStyled2, Listyled2,  Listyled1, LineSt} from './HelloWorld'
import data from '../data'
import { TipDivSt, TipH3St, TipPst } from './Article1Tip'
import { DivSt } from './FirstComponent'
import img33 from '../assets/33.png'
import img34 from '../assets/34.png'
import img35 from '../assets/35.png'
import img36 from '../assets/36.png'
import img37 from '../assets/37.png'
import img38 from '../assets/38.png'
import img39 from '../assets/39.png'
import img40 from '../assets/40.png'
import img41 from '../assets/41.png'
import img42 from '../assets/42.png'
import img43 from '../assets/43.png'
import img44 from '../assets/44.png'

import Note, {NoteP} from './Note'
import DeepDive from './DeepDive'
import Nextpage from './Nextpage'
import PicBox from './PicBox'
import Pitfall from './Pitfall'

function MoreJSX() {

  useEffect(() => {    
    let el = document.getElementById('moreJSX')
    console.log(el)
    el.scrollIntoView()    
  }, []);   

  return (
    <DivSt id='moreJSX'>
      <H1styled>მარკირების წერა JSX-ით</H1styled>
      <Pstyled1>{data.article6.text1}</Pstyled1>
      <H2styled>JSX: მარკირების დამატება JavaScript-ში</H2styled>
      <Pstyled1>{data.article6.text2}</Pstyled1>
      <PicBox src1={img33} text1='HTML' src2={img34} text2='JavaScript'/>
      <Pstyled1>{data.article6.text3}</Pstyled1>
      <PicBox src1={img35} text1='Sidebar.js React component' src2={img36} text2='Form.js React component'/>
      <Pstyled1>{data.article6.text4}</Pstyled1>
      <Pstyled1>{data.article6.text5}</Pstyled1>
      <Note>
          <NoteP>{data.article6.text6}</NoteP>            
      </Note>
      <H2styled>HTML-ის JSX-ად გადაქცევა</H2styled>
      <Pstyled1>მაგალითად, გაქვთ HTML მარკირების ფრაგმენტი:</Pstyled1>
      <ImgDiv1><img src={img37} alt="img37" /></ImgDiv1>
      <Pstyled1>და გსურთ ჩასვათ ის თქვენს კომპონენტში:</Pstyled1>
      <ImgDiv1><img src={img38} alt="img38" /></ImgDiv1>
      <Pstyled1>თუ პირდაპირ დააკოპირებთ კოდს და ჩასვით, ის არ იმუშავებს:</Pstyled1>
      <ImgDiv1><img src={img39} alt="img38" /></ImgDiv1>
      <Pstyled1>{data.article6.text7}</Pstyled1>
      <Note>
          <NoteP>{data.article6.text8}</NoteP>            
      </Note>
      <H2styled>JSX-ის წესები</H2styled>
      <H3styled>1. ერთი ძირეული ელემენტის დაბრუნება</H3styled>
      <Pstyled1>{data.article6.text9}</Pstyled1>
      <Pstyled1>{data.article6.text10}</Pstyled1>
      <ImgDiv1><img src={img40} alt="img40" /></ImgDiv1>
      <Pstyled1>{data.article6.text11}</Pstyled1>
      <ImgDiv1><img src={img41} alt="img41" /></ImgDiv1>
      <Pstyled1>{data.article6.text12}</Pstyled1>
      <DeepDive text={data.article6.text13}>
            <LineSt/>
            <Pstyled1>{data.article6.text14}</Pstyled1>            
        </DeepDive>
      <H3styled>2. დახურეთ ყველა ტეგი</H3styled>
      <Pstyled1>{data.article6.text15}</Pstyled1>
      <Pstyled1>{data.article6.text16}</Pstyled1>
      <ImgDiv1><img src={img42} alt="img42" /></ImgDiv1>
      <H3styled>3. camelCase აუცილებელია!</H3styled>
      <Pstyled1>{data.article6.text17}</Pstyled1>
      <Pstyled1>{data.article6.text18}</Pstyled1>
      <ImgDiv1><img src={img43} alt="img43" /></ImgDiv1>
      <Pstyled1>{data.article6.text19}</Pstyled1>
      <Pitfall>
        <Pstyled1>{data.article6.text20}</Pstyled1>
      </Pitfall>
      <H2styled>რჩევა: გამოიყენეთ JSX კონვერტორი</H2styled>
      <Pstyled1>
          {data.article6.text21}
          <LinkStyled2 to='https://transform.tools/html-to-jsx' target='_blank'>კონვერტორი </LinkStyled2>
          {data.article6.text22}
      </Pstyled1>
      <Pstyled1>საბოლოო შედეგი ასე გამოიყურება:</Pstyled1>
      <ImgDiv1><img src={img44} alt="img44" /></ImgDiv1>
      <H2styled>შეჯამება</H2styled>
      <Pstyled1>{data.article6.text23}</Pstyled1>
      <ul>
        <Listyled1>{data.article6.text24}</Listyled1>
        <Listyled1>{data.article6.text25}</Listyled1>
        <Listyled1>{data.article6.text26}</Listyled1>
      </ul>
      <Nextpage to='/jsinjsx' text='JavaScript-ი JSX-ში'/>
    </DivSt>
  )
}

export default MoreJSX