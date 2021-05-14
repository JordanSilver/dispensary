import styled from 'styled-components';
import Image from '../../components/Image';
import { sanityClient, urlFor } from '../../sanity';
import Link from 'next/link';

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.categ;

  const query = `*[ ${pageSlug}]`;

  const product = await sanityClient.fetch(query);

  return {
    props: {
      product,
    },
  };
};

const Category = ({ product }) => {
  return (
    <>
      <Background>
        <Brand>
          <img src='/brandlogo.png' />
        </Brand>

        <Container>
          <Title>
            <h1> {product.flower ? 'FLOWER' : 'EDIBLES'}</h1>
          </Title>
          {product && (
            <ProductDisplay>
              {product.map((item, index) => (
                <Card key={item.id}>
                  <Link href={`/${item.slug.current}`}>
                    <div>
                      <Image image={item.image} identifier='image' />
                      <span>{item.name}</span>
                      <h6>{item.name}</h6>
                    </div>
                  </Link>
                </Card>
              ))}
            </ProductDisplay>
          )}
        </Container>
      </Background>
    </>
  );
};

export default Category;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.pageBackground};
`;
const Container = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1000px;
`;
const ProductDisplay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 2rem;
`;
const Card = styled.div`
  z-index: 999;
  height: 12rem;
  width: 12rem;
  flex-flow: column nowrap;
  font-weight: 700;
  color: ${(props) => props.theme.titleColor};

  > div span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12rem;
    text-align: center;
    color: black;
    width: 12rem;
    background: ${(props) => props.theme.appBackground};
    position: absolute;
    transform: translateY(-102%);
    opacity: 0;
    transition: 0.3s ease all;

    &:hover {
      opacity: 1;
    }
    @media screen and (max-width: 760px) {
      display: none;
    }
  }
  > div h6 {
    position: relative;
    margin: 0 auto;
    background: white;
    text-align: center;
    border-radius: 0.3rem;
    color: black;
    @media screen and (min-width: 760px) {
      display: none;
    }
  }
  > div img {
    height: 100%;
    width: 100%;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
    &:hover {
      transform: scale(0.98);
    }
  }
`;

const Brand = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  z-index: 0;
  margin: 0 auto;
  height: 100vh;
  @media screen and (max-width: 600px) {
    width: 100%;
    top: 25%;
  }
  @media screen and (max-width: 800px) {
    top: 15%;

    > img {
      height: 100%;
      width: 100%;
      margin: 0 auto;
      @media screen and (max-width: 800px) {
        height: 80vh;
        top: 15%;
        width: 100%;
      }
      @media screen and (max-width: 600px) {
        height: 60vh;
        width: 100%;
      }
    }
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  position: relative;
  transform: translateY(-100%);
  > h1 {
    background: ${(props) => props.theme.appBackground};
    color: ${(props) => props.theme.titleColor};
    @media screen and (max-width: 460px) {
      font-size: 1.8rem;
    }
  }
`;
