import React from 'react';
import { FaMedal, FaUnlockAlt } from 'react-icons/fa';
import styled from 'styled-components';
import Image from 'next/image';
import { GiSprout } from 'react-icons/gi';

const Contact = () => {
  const iconSize = 45;
  const iconColor = 'green';

  return (
    <Container>
      <Brand>
        <Image src='/brandlogo.png' height={400} width={400} />
      </Brand>
      <br />
      <ContactInfo>
        <h2>TEXT US: (000) 000-0000</h2>
        <Line>
          <hr />
        </Line>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          deleniti officia quas laboriosam consequatur ipsum?
        </p>
      </ContactInfo>
      <Cards>
        <Card>
          <FaMedal color={iconColor} size={iconSize} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ratione asperiores cum reiciendis! Iure, officia.
          </p>
        </Card>
        <Card>
          <GiSprout color={iconColor} size={iconSize} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ratione asperiores cum reiciendis! Iure, officia.
          </p>
        </Card>
        <Card>
          <FaUnlockAlt color={iconColor} size={iconSize} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ratione asperiores cum reiciendis! Iure, officia.
          </p>
        </Card>
      </Cards>
    </Container>
  );
};

export default Contact;
const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  transition: all 0.1s ease;
`;
const Brand = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContactInfo = styled.div`
  text-align: center;
  margin: 2rem 0;
`;
const Cards = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  @media screen and (max-width: 460px) {
    flex-flow: column nowrap;
  }
`;
const Card = styled.div`
  margin: 0.5rem auto;
  flex: 0.33;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 2rem;
  text-align: center;
  height: 100%;
  font-size: 1rem;
  background: ${(props) => props.theme.appBackground};
  border-radius: 1rem;
  @media screen and (max-width: 460px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const Line = styled.div`
  margin: 0 auto;
  width: 30%;
`;
