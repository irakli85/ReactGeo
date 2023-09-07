import React, {useEffect} from 'react'
import { H1styled, H2styled, Pstyled1, ImgDiv1, Listyled1} from './HelloWorld'
import data from '../data'
import { DivSt } from './FirstComponent'
import Learn from './Learn'
import Nextpage from './Nextpage'
import Pitfall from './Pitfall'
import DeepDive from './DeepDive'
import Note from './Note'

import img87 from '../assets/87.png'
import img88 from '../assets/88.png'
import img89 from '../assets/89.png'
import img90 from '../assets/90.png'
import img91 from '../assets/91.png'
import img92 from '../assets/92.png'
import img93 from '../assets/93.png'
import img94 from '../assets/94.png'
import img95 from '../assets/95.png'
import img96 from '../assets/96.png'
import img97 from '../assets/97.png'
import img98 from '../assets/98.png'
import img99 from '../assets/99.png'
import img100 from '../assets/100.png'
import img101 from '../assets/101.png'
import img102 from '../assets/102.png'


function Lists() {

  useEffect(() => {    
    let el = document.getElementById('lists');
    console.log(el);
    el.scrollIntoView() ;
  }, []); 

  return (
    <DivSt id='lists'>
      <H1styled>სიების რენდერი</H1styled>
      <Pstyled1>{data.article10.text1}</Pstyled1>
      <Learn>
        <Pstyled1>{data.article10.text2}</Pstyled1>
        <Pstyled1>{data.article10.text3}</Pstyled1>
        <Pstyled1>{data.article10.text4}</Pstyled1>
      </Learn>
      <H2styled>მონაცემთა რენდერი მასივებიდან</H2styled>
      <Pstyled1>მაგალითად გვაქვს სიის კონტენტი:</Pstyled1>
      <ImgDiv1><img src={img87} alt="img87" /></ImgDiv1>
      <Pstyled1>{data.article10.text5}</Pstyled1>
      <Pstyled1>{data.article10.text6}</Pstyled1>
      <Pstyled1>1.	გადაიტანეთ მონაცემები მასივში:</Pstyled1>
      <ImgDiv1><img src={img88} alt="img88" /></ImgDiv1>
      <Pstyled1>{data.article10.text7}</Pstyled1>
      <ImgDiv1><img src={img89} alt="img89" /></ImgDiv1>
      <Pstyled1>{data.article10.text8}</Pstyled1>
      <ImgDiv1><img src={img90} alt="img90" /></ImgDiv1>
      <Pstyled1>აი შედეგიც:</Pstyled1>
      <ImgDiv1><img src={img91} alt="img91" /></ImgDiv1>
      <Pstyled1>{data.article10.text9}</Pstyled1>
      <img src={img92} alt="img92" />
      <Pstyled1>{data.article10.text10}</Pstyled1>
      <H2styled>{data.article10.text11}</H2styled>
      <Pstyled1>{data.article10.text12}</Pstyled1>
      <ImgDiv1><img src={img93} alt="img93" /></ImgDiv1>
      <Pstyled1>{data.article10.text13}</Pstyled1>
      <Pstyled1>{data.article10.text14}</Pstyled1>
      <Pstyled1>{data.article10.text15}</Pstyled1>
      <ImgDiv1><img src={img94} alt="img94" /></ImgDiv1>
      <Pstyled1>{data.article10.text16}</Pstyled1>
      <ImgDiv1><img src={img95} alt="img95" /></ImgDiv1>
      <Pstyled1>{data.article10.text17}</Pstyled1>
      <ImgDiv1><img src={img96} alt="img96" /></ImgDiv1>
      <ImgDiv1><img src={img97} alt="img97" /></ImgDiv1>
      <Pitfall>
        <Pstyled1>{data.article10.text18}</Pstyled1>
        <ImgDiv1><img src={img98} alt="img98" /></ImgDiv1>
        <Pstyled1>{data.article10.text19}</Pstyled1>
        <ImgDiv1><img src={img99} alt="img99" /></ImgDiv1>
        <Pstyled1>{data.article10.text20}</Pstyled1>
      </Pitfall>
      <H2styled>{data.article10.text21}</H2styled>
      <Pstyled1>{data.article10.text22}</Pstyled1>
      <img src={img92} alt="img92" />
      <Pstyled1>{data.article10.text23}</Pstyled1>
      <ImgDiv1><img src={img100} alt="img100" /></ImgDiv1>
      <Note>
        <Pstyled1>{data.article10.text24}</Pstyled1>
      </Note>
      <Pstyled1>{data.article10.text25}</Pstyled1>
      <Pstyled1>{data.article10.text26}</Pstyled1>
      <ImgDiv1><img src={img101} alt="img101" /></ImgDiv1>
      <DeepDive text={data.article10.text27}>
        <Pstyled1>{data.article10.text28}</Pstyled1>
        <Pstyled1>{data.article10.text29}</Pstyled1>
        <ImgDiv1><img src={img102} alt="img102" /></ImgDiv1>
        <Pstyled1>{data.article10.text30}</Pstyled1>
      </DeepDive>
      <H2styled>{data.article10.text31}</H2styled>
      <Pstyled1>{data.article10.text32}</Pstyled1>
      <ul>
        <Listyled1>{data.article10.text33}</Listyled1>
        <Listyled1>{data.article10.text34}</Listyled1>
      </ul>
      <H2styled>{data.article10.text35}</H2styled>
      <ul>
        <Listyled1>{data.article10.text36}</Listyled1>
        <Listyled1>{data.article10.text37}</Listyled1>
      </ul>
      <H2styled>{data.article10.text38}</H2styled>
      <Pstyled1>{data.article10.text39}</Pstyled1>
      <Pstyled1>{data.article10.text40}</Pstyled1>
      <Pitfall>
        <Pstyled1>{data.article10.text41}</Pstyled1>
        <Pstyled1>{data.article10.text42}</Pstyled1>
        <Pstyled1>{data.article10.text43}</Pstyled1>
      </Pitfall>
      <H2styled>შეჯამება</H2styled>
      <ul>
        <Listyled1>{data.article10.text44}</Listyled1>
        <Listyled1>{data.article10.text45}</Listyled1>
        <Listyled1>{data.article10.text46}</Listyled1>
        <Listyled1>{data.article10.text47}</Listyled1>
      </ul>
      <Nextpage to='/pure' text='"სუფთა" კომპონენტები'/>
    </DivSt>  
  )
}

export default Lists