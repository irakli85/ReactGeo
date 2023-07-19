import React from 'react'
import { styled } from 'styled-components'
import { H1styled, H2styled, H3styled, Pstyled, Pstyled1, ImgDiv1, ImgDiv2, Listyled1} from './HelloWorld'
import data from '../data'
import { TipDivSt, TipH3St, TipPst } from './Article1Tip'
import { DivSt } from './FirstComponent'
import img25 from '../assets/25.png'
import img26 from '../assets/26.png'
import img27 from '../assets/27.png'
import Note, {NoteP} from './Note'


function ExportImport() {
  return (
    <DivSt>
        <H1styled>კომპონენტების იმპორტი და ექსპორტი</H1styled>
        <Pstyled1>{data.article5.text1}</Pstyled1>
        <H2styled>მთავარი კომპონენტი</H2styled>
        <Pstyled1>ჩვენ შევქმენით Profile და Gallery კომპონენტები:</Pstyled1>
        <ImgDiv2><img src={img25} alt="img25" /></ImgDiv2>
        <Pstyled1>{data.article5.text2}</Pstyled1>
        <Pstyled1>{data.article5.text3}</Pstyled1>
        <ol>
            <Listyled1>{data.article5.text4}</Listyled1>
            <Listyled1>{data.article5.text5}</Listyled1>
            <Listyled1>{data.article5.text6}</Listyled1>
        </ol>
        <Pstyled1>{data.article5.text7}</Pstyled1>
        <ImgDiv2><img src={img26} alt="img26" /></ImgDiv2>
        <Pstyled1>{data.article5.text8}</Pstyled1>
        <Pstyled1>1. Gallery.js:</Pstyled1>
        <ul>
            <Listyled1>{data.article5.text9}</Listyled1>
            <Listyled1>{data.article5.text10}</Listyled1>
        </ul>
        <Pstyled1>2. App.js:</Pstyled1>
        <ul>
            <Listyled1>{data.article5.text11}</Listyled1>
            <Listyled1>{data.article5.text12}</Listyled1>
        </ul>
        <Note>
            <NoteP>{data.article5.text13}</NoteP>
            <ImgDiv1><img src={img27} alt="img27" /></ImgDiv1>
            <NoteP>{data.article5.text14}</NoteP>
        </Note>
    </DivSt>   
  )
}

export default ExportImport