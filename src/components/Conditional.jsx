import React, {useEffect} from 'react'
import { H1styled, H2styled, Pstyled1, ImgDiv1, Listyled1} from './HelloWorld'
import data from '../data'
import { DivSt } from './FirstComponent'
import Learn from './Learn'
import Nextpage from './Nextpage'
import Pitfall from './Pitfall'
import DeepDive from './DeepDive'

import img69 from '../assets/69.png'
import img70 from '../assets/70.png'
import img71 from '../assets/71.png'
import img72 from '../assets/72.png'
import img73 from '../assets/73.png'
import img74 from '../assets/74.png'
import img75 from '../assets/75.png'
import img76 from '../assets/76.png'
import img77 from '../assets/77.png'
import img78 from '../assets/78.png'
import img79 from '../assets/79.png'
import img80 from '../assets/80.png'
import img81 from '../assets/81.png'
import img82 from '../assets/82.png'
import img83 from '../assets/83.png'
import img84 from '../assets/84.png'
import img85 from '../assets/85.png'
import img86 from '../assets/86.png'

function Conditional() {

  useEffect(() => {    
    let el = document.getElementById('cond');
    console.log(el);
    el.scrollIntoView() ;
  }, []); 

  

  return (
    <DivSt id='cond'>
      <H1styled>პირობითი რენდერი</H1styled>
      <Pstyled1>{data.article9.text1}</Pstyled1>
      <Learn>        
          <Pstyled1>•	როგორ გამოვიტანოთ პირობიდან გამომდინარე სხვადასხვა JSX</Pstyled1>
          <Pstyled1>•	როგორ შევიტანოთ ან წავშალოთ პირობიდან გამომდინარე JSX-ის ნაწილი </Pstyled1>
          <Pstyled1>•	გავრცელებული პირობითი რენდერის სინტაქსებს, რომლებსაც შეხვდებით React-ში</Pstyled1>
      </Learn>
      <H2styled>პირობითად დაბრუნებული JSX</H2styled>
      <Pstyled1>{data.article9.text2}</Pstyled1>
      <ImgDiv1><img src={img69} alt="img69" /></ImgDiv1>
      <Pstyled1>{data.article9.text3}</Pstyled1>
      <Pstyled1>{data.article9.text4}</Pstyled1>
      <ImgDiv1><img src={img70} alt="img70" /></ImgDiv1>
      <Pstyled1>{data.article9.text5}</Pstyled1>
      <ImgDiv1><img src={img71} alt="img71" /></ImgDiv1>
      <Pstyled1>{data.article9.text6}</Pstyled1>
      <H2styled>null არაფერს აბრუნებს</H2styled>
      <Pstyled1>{data.article9.text7}</Pstyled1>
      <ImgDiv1><img src={img72} alt="img72" /></ImgDiv1>
      <Pstyled1>{data.article9.text8}</Pstyled1>
      <ImgDiv1><img src={img73} alt="img73" /></ImgDiv1>
      <Pstyled1>{data.article9.text9}</Pstyled1>
      <H2styled>JSX-ის პირობითი რენდერი</H2styled>
      <Pstyled1>{data.article9.text10}</Pstyled1>
      <ImgDiv1><img src={img74} alt="img74" /></ImgDiv1>
      <Pstyled1>ძალიან ჰგავს</Pstyled1>
      <ImgDiv1><img src={img75} alt="img75" /></ImgDiv1>
      <Pstyled1>{data.article9.text11}</Pstyled1>
      <ImgDiv1><img src={img76} alt="img76" /></ImgDiv1>
      <Pstyled1>{data.article9.text12}</Pstyled1>
      <H2styled>პირობითი (ternary) ოპერატორი (? :)</H2styled>
      <Pstyled1>{data.article9.text13}</Pstyled1>
      <Pstyled1>ამის ნაცვლად:</Pstyled1>
      <ImgDiv1><img src={img77} alt="img77" /></ImgDiv1>
      <Pstyled1>შეგიძლიათ დაწეროთ ეს:</Pstyled1>
      <ImgDiv1><img src={img78} alt="img78" /></ImgDiv1>
      <Pstyled1>{data.article9.text14}</Pstyled1>
      <DeepDive text={data.article9.text15}>
        <Pstyled1>{data.article9.text16}</Pstyled1>
      </DeepDive>
      <Pstyled1>{data.article9.text17}</Pstyled1>
      <ImgDiv1><img src={img79} alt="img79" /></ImgDiv1>
      <Pstyled1>{data.article9.text18}</Pstyled1>
      <H2styled>ლოგიკური AND ოპერატორი (&&)</H2styled>
      <Pstyled1>{data.article9.text19}</Pstyled1>
      <ImgDiv1><img src={img80} alt="img80" /></ImgDiv1>
      <Pstyled1>{data.article9.text20}</Pstyled1>
      <ImgDiv1><img src={img81} alt="img81" /></ImgDiv1>
      <Pstyled1>{data.article9.text21}</Pstyled1>
      <Pitfall>
        <Pstyled1>{data.article9.text22}</Pstyled1>
        <Pstyled1>{data.article9.text23}</Pstyled1>
        <Pstyled1>{data.article9.text24}</Pstyled1>
        <Pstyled1>{data.article9.text25}</Pstyled1>
      </Pitfall>
      <H2styled>{data.article9.text26}</H2styled>
      <Pstyled1>{data.article9.text27}</Pstyled1>
      <ImgDiv1><img src={img82} alt="img82" /></ImgDiv1>
      <Pstyled1>{data.article9.text28}</Pstyled1>
      <ImgDiv1><img src={img83} alt="img83" /></ImgDiv1>
      <Pstyled1>{data.article9.text29}</Pstyled1>
      <ImgDiv1><img src={img84} alt="img84" /></ImgDiv1>
      <Pstyled1>{data.article9.text30}</Pstyled1>
      <ImgDiv1><img src={img85} alt="img85" /></ImgDiv1>
      <Pstyled1>{data.article9.text31}</Pstyled1>
      <ImgDiv1><img src={img86} alt="img86" /></ImgDiv1>
      <Pstyled1>{data.article9.text32}</Pstyled1>
      <H2styled>შეჯამება</H2styled>
      <ul>
        <Listyled1>{data.article9.text33}</Listyled1>
        <Listyled1>{data.article9.text34}</Listyled1>
        <Listyled1>{data.article9.text35}</Listyled1>
        <Listyled1>{data.article9.text36}</Listyled1>
        <Listyled1>{data.article9.text37}</Listyled1>
        <Listyled1>{data.article9.text38}</Listyled1>
      </ul>
      <Nextpage to='/lists' text='სიების რენდერი'/>
    </DivSt>
  )
}

export default Conditional