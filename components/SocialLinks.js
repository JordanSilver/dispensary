import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const SocialLinks = ({ size }) => {
  return (
    <>
      <Social>
        <FaFacebook color='blue' size={size} />
        <FaTwitter color='royalblue' size={size} />
        <FaInstagram color='red' size={size} />
      </Social>
    </>
  );
};

export default SocialLinks;

const Social = styled.div`
  height: 10vh;
  width: 100%;
  padding: 0 15rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.appBackground};

  @media screen and (max-width: 460px) {
    width: 100%;
    border-radius: 0;
    padding: 0;
  }

  > svg {
    transition: 0.2s ease all;
    margin: 0 2rem;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
      transform: scale(0.95);
    }
  }
`;
