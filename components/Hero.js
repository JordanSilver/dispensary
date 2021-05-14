import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image';
import { sanityClient } from '../sanity';
import CarouselComp from '../components/Carousel';

const Hero = ({ gallery }) => {
  return <Landing></Landing>;
};

export default Hero;

const Landing = styled.div`
  height: 100%;
  max-width: 1000px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.titleColor};
`;

const Heading = styled.div`
  height: 100%;
  width: 100%;
  font-size: 5rem;
`;
