import React from 'react'
import {Link} from 'react-router-dom'
import { styled } from 'styled-components'

function MCcontent() {
  return (
    <MCcontentDivSt>
       <NavbarLink to='/HelloWorld'>1. Hello World</NavbarLink>
       <NavbarLink to='/introJSX'>2. JSX-თან გაცნობა</NavbarLink>
       <NavbarLink to='/rendering'>3. ელემენტების რენდერი</NavbarLink>
       <NavbarLink to='/components'>4. პირველი კომპონენტი</NavbarLink>
       <NavbarLink to='/import'>5. კომპონენტების იმპორტი და ექსპორტი</NavbarLink>
       <NavbarLink to='/morejsx'>6. უფრო მეტი JSX</NavbarLink>
       <NavbarLink to='/jsinjsx'>7. JavaScript-ი JSX-ში</NavbarLink>
       <NavbarLink to='/props'>8. Props</NavbarLink>
       <NavbarLink to='/conditional'>9. პირობითი რენდერი</NavbarLink>
       <NavbarLink to='/lists'>10. სიების რენდერი</NavbarLink>
       <NavbarLink to='/pure'>11. "სუფთა" კომპონენტები</NavbarLink>           
    </MCcontentDivSt>
  )
}

const MCcontentDivSt = styled.div`
    display: flex;
    flex-direction: column;
`

const NavbarLink = styled(Link)`
    
    color: #1a1a1a;
    font-size: 1.6rem;
    text-decoration: none;
    margin: 10px;
    padding-left: 15px;
    border-left: 4px solid transparent;
    &:hover,
    &:focus{
        color: rgb(107, 107, 107);
        border-left: 4px solid #61dafb;
    }
`

export default MCcontent