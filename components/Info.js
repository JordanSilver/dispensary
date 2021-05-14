import React from 'react';
import styled from 'styled-components';

const Info = () => {
  return (
    <>
      <Background>
        <Container>
          <Left>
            <h1>
              DETAILS
              <hr />
            </h1>
            <h3>HOW IT WORKS</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              fuga eos aut, quidem excepturi possimus molestias illum
              necessitatibus vitae ut perferendis at ullam, labore, ipsum
              eligendi illo fugit ex dicta?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              aliquam.
            </p>
            <h3>LOCATION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit
              laboriosam minima, natus pariatur magnam voluptates sit. Ex
              architecto reprehenderit quaerat aperiam qui sapiente reiciendis.
            </p>
          </Left>
          <Right>
            <br />
            <br />
            <h3>ORDER REQ.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              recusandae pariatur at quasi ipsum ullam.
            </p>
            <h3>WHEN TO ORDER</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              nesciunt, aliquam nisi sit in maiores provident nostrum fuga, sed
              delectus animi laudantium odio cupiditate. Aut minus assumenda
              aperiam veritatis vel.
            </p>
            <br />
            <h5>
              Sun – Thu: 10:00 am – 8:00 pm <br /> Fri – Sat: 10:00 am – 9:00 pm
            </h5>
          </Right>
        </Container>
      </Background>
    </>
  );
};

export default Info;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1000px;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.appBackground};
  color: ${(props) => props.theme.titleColor};
  padding: 3rem;
  border-radius: 1rem;
  border-bottom: 1px #333 solid;
  border-right: 1px #333 solid;
  box-shadow: 1px 1px 5px whitesmoke;
  text-align: left;
  @media screen and (max-width: 460px) {
    flex-flow: column wrap;
    padding: 0.6rem;
    max-width: 350px;
    margin: 0 auto;
  }
`;
const Left = styled.div`
  flex: 0.5;
  padding: 2rem;
  @media screen and (max-width: 460px) {
    padding: 0.6rem;
  }
`;
const Right = styled.div`
  flex: 0.5;
  padding: 2rem;
  @media screen and (max-width: 460px) {
    padding: 0.6rem;
  }
`;

const Background = styled.div`
  padding: 1rem 0;
  width: 100%;
  background: ${(props) => props.theme.appBackground};
`;
