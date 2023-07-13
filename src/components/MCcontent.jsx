import React from 'react'
import {Link} from 'react-router-dom'
import { styled } from 'styled-components'
import HelloWorld from './HelloWorld'

function MCcontent() {
  return (
    <MCcontentDivSt>
       <NavbarLink to='/HelloWorld'>1. Hello, World!</NavbarLink>
       <NavbarLink>2. JSX-თან გაცნობა</NavbarLink>
       <NavbarLink>3. ელემენტების რენდერინგი</NavbarLink>
       <NavbarLink>4. კომპონენტები და Props</NavbarLink>
       <NavbarLink>5. State და სიცოცხლის ციკლი</NavbarLink>
       <NavbarLink>6. Event-ების მართვა</NavbarLink>
       <NavbarLink>7. პირობითი რენდერინგი</NavbarLink>
       <NavbarLink>8. სიები და key</NavbarLink>
       <NavbarLink>9. ფორმები</NavbarLink>
       <NavbarLink>10. State-ის ზემოთ ამოწევა</NavbarLink>
       <NavbarLink>11. კომპოზიცია VS მემკვიდრეობითობა</NavbarLink>
       <NavbarLink>12. React-ის ფილოსოფია</NavbarLink>       
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
    &:hover,
    &:focus{
        color: rgb(107, 107, 107);
    }
`

export default MCcontent