import React from 'react';
import { Button } from './styles/Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h3>404</h3>
          <h3>Oh No!Seems you are lost</h3>
          <NavLink to="/">
          <Button className='goback-home-btn'>Go Back To Home</Button>
        </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
    .goback-home-btn{
      margin: 2rem;
    }
  }
`;

export default Error;