import React from 'react'
import HeroSection from './components/HeroSection';
import styled from 'styled-components';
import { useProviderValue } from './context/ProductContext';

const About = () => {
  const {name}=useProviderValue();
  const data={
    name:"Adithya Ecommerce"
  };
  return (
    <Wrapper>
    <p>{name}</p>
      <HeroSection data={data}/>
    </Wrapper>
  )
}

const Wrapper=styled.section``;

export default About;