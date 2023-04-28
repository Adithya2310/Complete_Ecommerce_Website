import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Navbar';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" >
        <img className="logo" src="./images/logoDeer.png" alt="logo" />
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
    margin-left:10px;
    margin-top:2px;
    border-radius:5px;
    height:5rem;
    width:90%
  }
`;

// const Logo = styled.img`
//   height: 2rem;
//   width: 10rem;
//   object-fit: contain; /* or object-fit: cover; */
// `;

export default Header;
