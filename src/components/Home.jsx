import React from 'react';
import logo from '../assets/spinlogo.svg';
import '../assets/home.css'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';


function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />        
        <HomeLink to='/installation'>დაიწყე!</HomeLink>
      </header>
    </div>
  );
}

const HomeLink = styled(Link)`
    margin-top: 2rem;
    color: #61dafb;
    font-size: 5rem;
`

export default Home;
