import React, {useEffect} from 'react'
import { styled } from 'styled-components'
import { H1styled, H2styled, H3styled, Pstyled, Pstyled1, ImgDiv2, Listyled} from './HelloWorld'
import data from '../data'
import { TipDivSt, TipH3St, TipPst } from './Article1Tip'
import Nextpage from './Nextpage'
import img18 from '../assets/18.png'
import img19 from '../assets/19.png'
import img20 from '../assets/20.png'
import img21 from '../assets/21.png'
import img22 from '../assets/22.png'
import img23 from '../assets/23.png'
import img24 from '../assets/24.png'



function FirstComponent() {
    useEffect(() => {    
        let el = document.getElementById('component')
        console.log(el)
        el.scrollIntoView()    
      }, []);
      
  return (
    <DivSt id='component'>
        <H1styled>პირველი კომპონენტი</H1styled>
        <Pstyled>{data.article4.text1}</Pstyled>
        <ImgDiv2><img src={img18} alt="img18" /></ImgDiv2>
        <H2styled>კომპონენტის შექმნა</H2styled>
        <Pstyled>{data.article4.text2}</Pstyled>
        <Pstyled>როგორ შევქმნათ კომპონენტი:</Pstyled>
        <ImgDiv2><img src={img19} alt="img19" /></ImgDiv2>
        <H3styled>ნაბიჯი 1: კომპონენტის ექსპორტი</H3styled>
        <Pstyled>{data.article4.text3}</Pstyled>
        <H3styled>ნაბიჯი 2: ფუნქციის განსაზღვრა</H3styled>
        <Pstyled>{data.article4.text4}</Pstyled>
        <TipDivSt>
            <TipH3St>საყურადღებო:</TipH3St>
            <TipPst>{data.article4.text5}</TipPst>
        </TipDivSt>
        <H3styled>ნაბიჯი 3: შეიტანეთ მარქაფი</H3styled>
        <Pstyled>{data.article4.text6}</Pstyled>
        <Pstyled>{data.article4.text7}</Pstyled>
        <ImgDiv2><img src={img20} alt="img20" /></ImgDiv2>
        <Pstyled>{data.article4.text8}</Pstyled>
        <ImgDiv2><img src={img21} alt="img21" /></ImgDiv2>
        <TipDivSt>
            <TipH3St>საყურადღებო:</TipH3St>
            <TipPst>{data.article4.text9}</TipPst>
        </TipDivSt>
        <H2styled>კომპონენტის გამოყენება</H2styled>
        <Pstyled>{data.article4.text10}</Pstyled>
        <ImgDiv2><img src={img18} alt="img18" /></ImgDiv2>
        <H2styled>რას ხედავს ბრაუზერი</H2styled>
        <ul>
            <Listyled>{data.article4.text11}</Listyled>
            <Listyled>{data.article4.text12}</Listyled>
        </ul>
        <Pstyled>{data.article4.text13}</Pstyled>
        <ImgDiv2><img src={img22} alt="img22" /></ImgDiv2>
        <H2styled>კომპონენტების ჩაშენება და ორგანიზება</H2styled>
        <Pstyled>{data.article4.text14}</Pstyled>
        <Pstyled>{data.article4.text15}</Pstyled>
        <TipDivSt>
            <TipH3St>საყურადღებო:</TipH3St>
            <TipPst>{data.article4.text16}</TipPst>
            <ImgDiv2><img src={img23} alt="img23" /></ImgDiv2>
            <TipPst>{data.article4.text17}</TipPst>
            <ImgDiv2><img src={img24} alt="img24" /></ImgDiv2>
        </TipDivSt>
        <H2styled>შეჯამება</H2styled>
        <Pstyled>გავიმეოროთ რამდენიმე ძირითადი პუნქტი.</Pstyled>
        <ul>
            <Listyled>{data.article4.text18}</Listyled>
            <Listyled>{data.article4.text19}</Listyled>
            <Listyled>{data.article4.text20}</Listyled>
            <Pstyled1>{data.article4.text21}</Pstyled1>
            <Pstyled1>{data.article4.text22}</Pstyled1>
        </ul>
        <Nextpage to='/import' text='კომპონენტების იმპორტი და ექსპორტი'/>
    </DivSt>
  )
}


const DivSt = styled.div`
    margin: 12rem 9rem 15rem 9rem;
`


export default FirstComponent