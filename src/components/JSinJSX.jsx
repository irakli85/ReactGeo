import React, {useEffect, useState} from 'react'
import { styled } from 'styled-components'
import { H1styled, H2styled, H3styled, Pstyled, Pstyled1, ImgDiv1, ImgDiv2, ImgDiv3, LinkStyled2, Listyled2,  Listyled1, LineSt} from './HelloWorld'
import data from '../data'
import { TipDivSt, TipH3St, TipPst } from './Article1Tip'
import { DivSt } from './FirstComponent'
import Note, {NoteP} from './Note'
import DeepDive from './DeepDive'
import Nextpage from './Nextpage'
import PicBox from './PicBox'
import Pitfall from './Pitfall'
import img45 from '../assets/45.png'
import img46 from '../assets/46.png'
import img47 from '../assets/47.png'
import img48 from '../assets/48.png'
import img49 from '../assets/49.png'
import img50 from '../assets/50.png'
import img51 from '../assets/51.png'
import img52 from '../assets/52.png'
import img53 from '../assets/53.png'


function JSinJSX() {
  useEffect(() => {    
    let el = document.getElementById('JSinJSX')
    console.log(el)
    el.scrollIntoView()    
  }, []); 
  return (
    <DivSt id='JSinJSX'>
      <H1styled>JavaScript-ი JSX-ში ფიგურული ფრჩხილებში</H1styled>
      <Pstyled1>{data.article7.text1}</Pstyled1>
      <H2styled>სტრინგების გადაცემა ბრჭყალების გამოყენებით</H2styled>
      <Pstyled1>{data.article7.text2}</Pstyled1>
      <ImgDiv1><img src={img45} alt="img45" /></ImgDiv1>
      <Pstyled1>{data.article7.text3}</Pstyled1>
      <Pstyled1>{data.article7.text4}</Pstyled1>
      <ImgDiv1><img src={img46} alt="img46" /></ImgDiv1>
      <Pstyled1>{data.article7.text5}</Pstyled1>
      <H2styled>ფიგურული ფრჩხილების გამოყენება: ფანჯარა JavaScript-ის სამყაროსთვის</H2styled>
      <Pstyled1>{data.article7.text6}</Pstyled1>
      <ImgDiv1><img src={img47} alt="img47" /></ImgDiv1>
      <Pstyled1>{data.article7.text7}</Pstyled1>
      <Pstyled1>{data.article7.text8}</Pstyled1>
      <ImgDiv1><img src={img48} alt="img48" /></ImgDiv1>
      <H2styled>სად გამოვიყენოთ ხვეული ბრეკეტები</H2styled>
      <Pstyled1>{data.article7.text9}</Pstyled1>
      <Pstyled1>{data.article7.text10}</Pstyled1>
      <Pstyled1>{data.article7.text11}</Pstyled1>
      <H2styled>"ორმაგი ფრჩხილების" გამოყენება: CSS და სხვა ობიექტები JSX-ში</H2styled>
      <Pstyled1>{data.article7.text12}</Pstyled1>
      <Pstyled1>{data.article7.text13}</Pstyled1>
      <ImgDiv1><img src={img49} alt="img49" /></ImgDiv1>
      <Pstyled1>{data.article7.text14}</Pstyled1>
      <Pstyled1>{data.article7.text15}</Pstyled1>
      <ImgDiv1><img src={img50} alt="img50" /></ImgDiv1>
      <Pstyled1>{data.article7.text16}</Pstyled1>
      <Pitfall>
        <Pstyled1>{data.article7.text17}</Pstyled1>
      </Pitfall>
      <H2styled>უფრო მეტი  JavaScript ობიექტებზე და ფიგურულ ფრჩხილებზე</H2styled>
      <Pstyled1>{data.article7.text18}</Pstyled1>
      <ImgDiv1><img src={img51} alt="img51" /></ImgDiv1>
      <Pstyled1>{data.article7.text19}</Pstyled1>
      <ImgDiv1><img src={img52} alt="img52" /></ImgDiv1>
      <Pstyled1>კომპონენტში person-ის მნიშვნელობებს ვიყენებთ შემდეგნაირად:</Pstyled1>
      <ImgDiv1><img src={img53} alt="img53" /></ImgDiv1>
      <Pstyled1>{data.article7.text20}</Pstyled1>
      <H2styled>შეჯამება</H2styled>
      <Pstyled1>{data.article7.text21}</Pstyled1>
      <ul>
        <Listyled1>{data.article7.text22}</Listyled1>
        <Listyled1>{data.article7.text23}</Listyled1>
        <Listyled1>{data.article7.text24}</Listyled1>
        <Listyled1>{data.article7.text25}</Listyled1>
      </ul>
      <Nextpage to='/props' text='props'/>
    </DivSt>
  )
}

export default JSinJSX