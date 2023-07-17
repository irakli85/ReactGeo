import React, {useEffect} from 'react'
import { styled } from 'styled-components'
import { H1styled, H2styled, Pstyled, LinkStyled2, ImgDiv} from './HelloWorld'
import data from '../data'
import img2 from '../assets/2.png'
import { TipDivSt, TipH3St, TipPst } from './Article1Tip'
import Nextpage from './Nextpage'

function InstalContent() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <InstallDivSt>
        <H1styled>ახალი React აპლიკაციის შექმნა</H1styled>
        <H2styled>Create React App</H2styled>
        <Pstyled>{data.install.text1}</Pstyled>
        <Pstyled>{data.install.text2}
            <LinkStyled2 to='https://nodejs.org/en' target="_blank">{data.install.text3}</LinkStyled2>
            {data.install.text4}
        </Pstyled>
        <ImgDiv><img src={img2} alt="img2" /></ImgDiv>
        <TipDivSt>
            <TipH3St>შენიშვნა</TipH3St>
            <TipPst>{data.install.text5}</TipPst>
        </TipDivSt>
        <Pstyled>{data.install.text6}
            <LinkStyled2 to='https://babeljs.io/'>Babel-ს </LinkStyled2>და
            <LinkStyled2 to='https://webpack.js.org/'> Webpack-ს,</LinkStyled2>
            {data.install.text7}
        </Pstyled>
        <Pstyled>{data.install.text8}</Pstyled>
        <Nextpage to='/HelloWorld' text='Hello World'/>
    </InstallDivSt>
  )
}

const InstallDivSt = styled.div`
    margin: 12rem 9rem 15rem 9rem;
`



export default InstalContent