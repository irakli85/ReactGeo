import React, {useEffect} from 'react'
import { H1styled, H2styled, Pstyled1, ImgDiv1, Listyled1} from './HelloWorld'
import data from '../data'
import { DivSt } from './FirstComponent'
import Learn from './Learn'
import DeepDive from './DeepDive'

import img103 from '../assets/103.png'
import img104 from '../assets/104.png'
import img105 from '../assets/105.png'
import img106 from '../assets/106.png'
import img107 from '../assets/107.png'
import img108 from '../assets/108.png'
import img109 from '../assets/109.png'
import recipe from '../assets/recipe.png'

function Pure() {

  useEffect(() => {    
    let el = document.getElementById('pure');
    console.log(el);
    el.scrollIntoView() ;
  }, []); 

  return (
    <DivSt id='pure'>
      <H1styled>{data.article11.text1}</H1styled>
      <Pstyled1>{data.article11.text2}</Pstyled1>
      <Learn>
        <Pstyled1>{data.article11.text3}</Pstyled1>
        <Pstyled1>{data.article11.text5}</Pstyled1>
        <Pstyled1>{data.article11.text6}</Pstyled1>
      </Learn>
      <H2styled>{data.article11.text7}</H2styled>
      <Pstyled1>{data.article11.text8}</Pstyled1>
      <ul>
        <Listyled1>{data.article11.text9}</Listyled1>
        <Listyled1>{data.article11.text10}</Listyled1>
      </ul>
      <Pstyled1>{data.article11.text11}</Pstyled1>
      <Pstyled1>{data.article11.text12}</Pstyled1>
      <Pstyled1>{data.article11.text13}</Pstyled1>
      <Pstyled1>{data.article11.text14}</Pstyled1>
      <Pstyled1>{data.article11.text15}</Pstyled1>
      <Pstyled1>{data.article11.text16}</Pstyled1>
      <Pstyled1>{data.article11.text17}</Pstyled1>
      <ImgDiv1><img src={img103} alt="img103" /></ImgDiv1>
      <Pstyled1>{data.article11.text18}</Pstyled1>
      <Pstyled1>{data.article11.text19}</Pstyled1>
      <ImgDiv1><img src={img104} alt="img104" /></ImgDiv1>
      <Pstyled1>{data.article11.text20}</Pstyled1>
      <Pstyled1>{data.article11.text21}</Pstyled1>
      <Pstyled1>{data.article11.text22}</Pstyled1>
      <Pstyled1>{data.article11.text23}</Pstyled1>
      <Pstyled1>{data.article11.text24}</Pstyled1>
      <img width="100%" src={recipe} alt="recipe" />
      <H2styled>{data.article11.text25}</H2styled>
      <Pstyled1>{data.article11.text26}</Pstyled1>
      <Pstyled1>{data.article11.text27}</Pstyled1>
      <ImgDiv1><img src={img105} alt="img105" /></ImgDiv1>
      <ImgDiv1><img src={img106} alt="img106" /></ImgDiv1>
      <Pstyled1>{data.article11.text28}</Pstyled1>
      <Pstyled1>{data.article11.text29}</Pstyled1>
      <Pstyled1>{data.article11.text30}</Pstyled1>
      <ImgDiv1><img src={img107} alt="img107" /></ImgDiv1>
      <ImgDiv1><img src={img108} alt="img108" /></ImgDiv1>
      <Pstyled1>{data.article11.text31}</Pstyled1>
      <Pstyled1>{data.article11.text32}</Pstyled1>
      <DeepDive text={data.article11.text33}>
        <Pstyled1>{data.article11.text34}</Pstyled1>
        <Pstyled1>{data.article11.text35}</Pstyled1>
        <Pstyled1>{data.article11.text36}</Pstyled1>
        <Pstyled1>{data.article11.text37}</Pstyled1>
        <Pstyled1>{data.article11.text38}</Pstyled1>
      </DeepDive>
      <H2styled>{data.article11.text39}</H2styled>
      <Pstyled1>{data.article11.text40}</Pstyled1>
      <Pstyled1>{data.article11.text41}</Pstyled1>
      <ImgDiv1><img src={img109} alt="img109" /></ImgDiv1>
      <Pstyled1>{data.article11.text42}</Pstyled1>
      <Pstyled1>{data.article11.text43}</Pstyled1>
      <H2styled>{data.article11.text44}</H2styled>
      <Pstyled1>{data.article11.text45}</Pstyled1>
      <Pstyled1>{data.article11.text46}</Pstyled1>
      <Pstyled1>{data.article11.text47}</Pstyled1>
      <Pstyled1>{data.article11.text48}</Pstyled1>
      <DeepDive text={data.article11.text49}>
        <Pstyled1>{data.article11.text50}</Pstyled1>
        <ul>
          <Listyled1>{data.article11.text51}</Listyled1>
          <Listyled1>{data.article11.text52}</Listyled1>
          <Listyled1>{data.article11.text53}</Listyled1>
        </ul>
        <Pstyled1>{data.article11.text54}</Pstyled1>
      </DeepDive>
      <H2styled>{data.article11.text4}</H2styled>
      <ul>
        <Listyled1>{data.article11.text55}
          <Listyled1>{data.article11.text56}</Listyled1>
          <Listyled1>{data.article11.text57}</Listyled1>
        </Listyled1>        
        <Listyled1>{data.article11.text58}</Listyled1>
        <Listyled1>{data.article11.text59}</Listyled1>
        <Listyled1>{data.article11.text60}</Listyled1>
        <Listyled1>{data.article11.text61}</Listyled1>
      </ul>
    </DivSt>
  )
}

export default Pure