import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Navbar';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" >
        <img className="logo" src="./images/logo.png" alt="logo" />
      </NavLink>
      <Nav/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo{
    height:5rem;
  }
`;

// const Logo = styled.img`
//   height: 2rem;
//   width: 10rem;
//   object-fit: contain; /* or object-fit: cover; */
// `;

export default Header;
