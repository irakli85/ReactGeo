import React from 'react'
import {Link} from 'react-router-dom'
import { styled } from 'styled-components'

function MCcontent() {
  return (
    <MCcontentDivSt>
       <NavbarLink to='/HelloWorld'>1. Hello World</NavbarLink>
       <NavbarLink to='/introJSX'>2. JSX-თან გაცნობა</NavbarLink>
       <NavbarLink to='/rendering'>3. ელემენტების რენდერი</NavbarLink>
       <NavbarLink to='/components'>4. კომპონენტები და Props</NavbarLink>
       <NavbarLink to='/state'>5. State და სიცოცხლის ციკლი</NavbarLink>
       <NavbarLink to='/events'>6. Event-ების მართვა</NavbarLink>
       <NavbarLink to='/conditional'>7. პირობითი რენდერინგი</NavbarLink>
       <NavbarLink to='/lists'>8. სიები და key</NavbarLink>
       <NavbarLink to='/forms'>9. ფორმები</NavbarLink>
       <NavbarLink to='/liftingup'>10. State-ის ზემოთ ამოწევა</NavbarLink>
       <NavbarLink to='/inheritance'>11. კომპოზიცია VS მემკვიდრეობითობა</NavbarLink>
       <NavbarLink to='/thinking'>12. React-ის ფილოსოფია</NavbarLink>       
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