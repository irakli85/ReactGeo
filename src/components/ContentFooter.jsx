import React from 'react'
import { styled } from 'styled-components'
import fblogo from '../assets/fblogo.png'

function ContentFooter() {
  return (
    <FooterDivSt>
        <FooterImgSt src={fblogo} alt='fb logo'/>
        <FooterP>Copyright © 2023 Meta Platforms, Inc.</FooterP>
    </FooterDivSt>
  )
}

const FooterDivSt = styled.div`    
    background: #282c34;
    color: #ffffff;
    padding: 5rem 9rem;
`

const FooterImgSt = styled.img`
    max-width: 16rem;
`
const FooterP = styled.p`
    color: #999;
    padding-top: 1.5rem;
    font-size: 1.6rem;
`

export default ContentFooter