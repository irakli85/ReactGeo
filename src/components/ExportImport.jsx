import React, {useEffect, useState} from 'react'
import { styled } from 'styled-components'
import { H1styled, H2styled, H3styled, Pstyled, Pstyled1, ImgDiv1, ImgDiv2, ImgDiv3, Listyled2,  Listyled1, LineSt} from './HelloWorld'
import data from '../data'
import { TipDivSt, TipH3St, TipPst } from './Article1Tip'
import { DivSt } from './FirstComponent'
import img25 from '../assets/25.png'
import img26 from '../assets/26.png'
import img27 from '../assets/27.png'
import img28 from '../assets/28.png'
import img29 from '../assets/29.png'
import img30 from '../assets/30.png'
import img31 from '../assets/31.png'
import img32 from '../assets/32.png'
import import1 from '../assets/import.svg'
import Note, {NoteP} from './Note'
import DeepDive from './DeepDive'
import Nextpage from './Nextpage'


function ExportImport() {
    useEffect(() => {    
        let el = document.getElementById('import')
        console.log(el)
        el.scrollIntoView()    
      }, []);   

  return (
    <DivSt id='import'>
        <H1styled>კომპონენტების იმპორტი და ექსპორტი</H1styled>
        <Pstyled1>{data.article5.text1}</Pstyled1>
        <H2styled>მთავარი კომპონენტი</H2styled>
        <Pstyled1>ჩვენ შევქმენით Profile და Gallery კომპონენტები:</Pstyled1>
        <ImgDiv1><img src={img25} alt="img25" /></ImgDiv1>
        <Pstyled1>{data.article5.text2}</Pstyled1>
        <Pstyled1>{data.article5.text3}</Pstyled1>
        <ol>
            <Listyled1>{data.article5.text4}</Listyled1>
            <Listyled1>{data.article5.text5}</Listyled1>
            <Listyled1>{data.article5.text6}</Listyled1>
        </ol>
        <Pstyled1>{data.article5.text7}</Pstyled1>
        <ImgDiv1><img src={img26} alt="img26" /></ImgDiv1>
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
        <DeepDive text='Default vs Named exports'>
            <LineSt/>
            <Pstyled1>{data.article5.text15}</Pstyled1>
            <ImgDiv3 src={import1} alt="import1" />
            <Pstyled1>{data.article5.text16}</Pstyled1>
            <ImgDiv3 src={img28} alt="img28" />
            <Pstyled1>{data.article5.text17}</Pstyled1>
            <Pstyled1>{data.article5.text18}</Pstyled1>
        </DeepDive>
        <H2styled>რამდენიმე კომპონენტის ექსპორტი და იმპორტი ერთი ფაილიდან</H2styled>
        <Pstyled1>{data.article5.text19}</Pstyled1>
        <Note>
            <NoteP>{data.article5.text20}</NoteP>
        </Note>
        <Pstyled1>{data.article5.text21}</Pstyled1>
        <ImgDiv1><img src={img29} alt="img29" /></ImgDiv1>
        <Pstyled1>{data.article5.text22}</Pstyled1>
        <ImgDiv1><img src={img30} alt="img30" /></ImgDiv1>
        <Pstyled1>{data.article5.text23}</Pstyled1>
        <ImgDiv1><img src={img31} alt="img31" /></ImgDiv1>
        <Pstyled1>{data.article5.text24}</Pstyled1>
        <ImgDiv1><img src={img32} alt="img32" /></ImgDiv1>
        <Pstyled1>{data.article5.text25}</Pstyled1>
        <ul>
            <Listyled1>Gallery.js:
                <ul>
                <Listyled2>{data.article5.text26}</Listyled2>
                <Listyled2>{data.article5.text27}</Listyled2>
                </ul>
            </Listyled1>
            <Listyled1>App.js:
                <ul>
                <Listyled2>{data.article5.text28}</Listyled2>
                <Listyled2>{data.article5.text29}</Listyled2>
                <Listyled2>{data.article5.text30}</Listyled2>
                </ul>
            </Listyled1>
        </ul>
        <H2styled>შეჯამება</H2styled>
        <Pstyled1>ამ თავში ჩვენ გავიარეთ:</Pstyled1>
        <ul>
            <Listyled1>{data.article5.text31}</Listyled1>
            <Listyled1>{data.article5.text32}</Listyled1>
            <Listyled1>{data.article5.text33}</Listyled1>
            <Listyled1>{data.article5.text34}</Listyled1>
        </ul>
        <Nextpage to='/morejsx' text='უფრო მეტი JSX'/>
    </DivSt>   
  )
}

export default ExportImport