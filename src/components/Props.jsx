import React, {useEffect} from 'react'
import { H1styled, H2styled, H3styled, Pstyled1, ImgDiv1, Listyled1} from './HelloWorld'
import data from '../data'
import { DivSt } from './FirstComponent'
import Learn from './Learn'
import Note from './Note'
import Nextpage from './Nextpage'
import Pitfall from './Pitfall'
import props from '../assets/props.png'
import clock from '../assets/clock.gif'
import img54 from '../assets/54.png'
import img55 from '../assets/55.png'
import img56 from '../assets/56.png'
import img57 from '../assets/57.png'
import img58 from '../assets/58.png'
import img59 from '../assets/59.png'
import img60 from '../assets/60.png'
import img61 from '../assets/61.png'
import img62 from '../assets/62.png'
import img63 from '../assets/63.png'
import img64 from '../assets/64.png'
import img65 from '../assets/65.png'
import img66 from '../assets/66.png'
import img67 from '../assets/67.png'
import img68 from '../assets/68.png'

function Props() {

  useEffect(() => {    
    let el = document.getElementById('props')
    console.log(el)
    el.scrollIntoView()    
  }, []); 

  return (
    <DivSt id='props'>
      <H1styled>Props-ების გადაცემა კომპონენტზე</H1styled>
      <Pstyled1>{data.article8.text1}</Pstyled1>
      <Learn>        
          <Pstyled1>•	როგორ გადავცეთ პროპსები კომპონენტს</Pstyled1>
          <Pstyled1>• როგორ წავიკითხოთ პროპსები კომპონენტიდან</Pstyled1>
          <Pstyled1>• როგორ მიუთითოთ პროპსის default მნიშვნელობები</Pstyled1>
          <Pstyled1>• როგორ მივაწოდოთ JSX კომპონენტს</Pstyled1>
          <Pstyled1>• როგორ იცვლება პროპსები დროში</Pstyled1>        
      </Learn>
      <H2styled>უკვე ნაცნობი პროპსები</H2styled>
      <Pstyled1>{data.article8.text2}</Pstyled1>
      <ImgDiv1><img src={img54} alt="img54" /></ImgDiv1>
      <Pstyled1>{data.article8.text3}</Pstyled1>
      <H2styled>პროპსების გადაცემა კომპონენტზე</H2styled>
      <Pstyled1>{data.article8.text4}</Pstyled1>
      <ImgDiv1><img src={img55} alt="img55" /></ImgDiv1>
      <Pstyled1>Avatar კომპონენტს  პროპსები მიეწოდება ორ ეტაპად.</Pstyled1>
      <H3styled>ეტაპი 1: პროპსების გადაცემა შვილობილ კომპონენტზე </H3styled>
      <Pstyled1>{data.article8.text5}</Pstyled1>
      <ImgDiv1><img src={img56} alt="img56" /></ImgDiv1>
      <Note>
        <Pstyled1>{data.article8.text6}</Pstyled1>
      </Note>
      <Pstyled1>{data.article8.text7}</Pstyled1>
      <H3styled>ეტაპი 2: პროპსების გამოყენება შვილობილ კომპონენტში</H3styled>
      <Pstyled1>{data.article8.text8}</Pstyled1>
      <ImgDiv1><img src={img57} alt="img57" /></ImgDiv1>
      <Pstyled1>{data.article8.text9}</Pstyled1>
      <ImgDiv1><img src={img58} alt="img58" /></ImgDiv1>
      <Pstyled1>{data.article8.text10}</Pstyled1>
      <Pstyled1>{data.article8.text11}</Pstyled1>
      <ImgDiv1><img src={img59} alt="img59" /></ImgDiv1>
      <Pstyled1>{data.article8.text12}</Pstyled1>
      <Pitfall>
        <Pstyled1>{data.article8.text13}</Pstyled1>
        <ImgDiv1><img src={img60} alt="img60" /></ImgDiv1>
        <Pstyled1>{data.article8.text14}</Pstyled1>
        <ImgDiv1><img src={img61} alt="img61" /></ImgDiv1>
      </Pitfall>
      <H2styled>პროპსზე default მნიშვნელობის მინიჭება</H2styled>
      <Pstyled1>{data.article8.text15}</Pstyled1>
      <ImgDiv1><img src={img62} alt="img62" /></ImgDiv1>
      <Pstyled1>{data.article8.text16}</Pstyled1>
      <Pstyled1>{data.article8.text17}</Pstyled1>
      <H2styled>პროპსების გადაცემა JSX spread სინტაქსით</H2styled>
      <Pstyled1>ზოგჯერ, პროპსების  გადაცემა ხშირად მეორდება:</Pstyled1>
      <ImgDiv1><img src={img63} alt="img63" /></ImgDiv1>
      <Pstyled1>{data.article8.text18}</Pstyled1>
      <ImgDiv1><img src={img64} alt="img64" /></ImgDiv1>
      <Pstyled1>{data.article8.text19}</Pstyled1>
      <Pstyled1>{data.article8.text20}</Pstyled1>
      <H2styled>JSX-ის გადაცემა პროპსის გამოყენებით</H2styled>
      <Pstyled1>{data.article8.text21}</Pstyled1>
      <ImgDiv1><img src={img65} alt="img65" /></ImgDiv1>
      <Pstyled1>{data.article8.text22}</Pstyled1>
      <ImgDiv1><img src={img66} alt="img66" /></ImgDiv1>
      <Pstyled1>{data.article8.text23}</Pstyled1>
      <ImgDiv1><img src={img67} alt="img67" /></ImgDiv1>
      <Pstyled1>{data.article8.text24}</Pstyled1>
      <Pstyled1>{data.article8.text25}</Pstyled1>
      <img className='props' src={props} alt="props" />
      <H2styled>როგორ იცვლება პროპსები დროში</H2styled>
      <Pstyled1>{data.article8.text26}</Pstyled1>
      <ImgDiv1>
        <img src={img68} alt="img68" />
        <img src={clock} alt="clock" />        
      </ImgDiv1>
      <Pstyled1>{data.article8.text27}</Pstyled1>
      <Pstyled1>{data.article8.text28}</Pstyled1>
      <Pstyled1>{data.article8.text29}</Pstyled1>
      <H2styled>შეჯამება</H2styled>
      <ul>
        <Listyled1>{data.article8.text30}</Listyled1>
        <Listyled1>{data.article8.text31}</Listyled1>
        <Listyled1>{data.article8.text32}</Listyled1>
        <Listyled1>{data.article8.text33}</Listyled1>
        <Listyled1>{data.article8.text34}</Listyled1>
        <Listyled1>{data.article8.text35}</Listyled1>
        <Listyled1>{data.article8.text36}</Listyled1>
      </ul>
      <Nextpage to='/conditional' text='პირობითი რენდერი'/>
    </DivSt>
  )
}

export default Props