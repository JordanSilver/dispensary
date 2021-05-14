import styled from 'styled-components';
import Image from '../components/Image';
import { sanityClient, urlFor } from '../sanity';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.prod;
  const query = `*[ _type == "product" && slug.current == $pageSlug][0]{
    name,
    image,
    images,
    description,
    flower,
  }`;

  const product = await sanityClient.fetch(query, { pageSlug });

  if (!product) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        name: product.name,
        image: product.image,
        images: product.images || null,
        description: product.description || null,
        flower: product.flower || null,
      },
    };
  }
};

const Product = ({ name, image, images, description, flower }) => {
  const size = 40;
  return (
    <>
      <Background>
        <Container>
          <Link href={`/category/${flower ? 'flower' : 'edibles'}`}>
            <StyledLink>back</StyledLink>
          </Link>
          <Brand>
            <img src='/brandlogo.png' />
          </Brand>
          <Title>
            {' '}
            <h3>{name}</h3>{' '}
          </Title>
          <Hero>
            <Showcase>
              <Image image={image} identifier='image' />
            </Showcase>
            <Details>
              {' '}
              {name}
              <p>{description}</p>
            </Details>
          </Hero>
          {images && (
            <Gallery>
              {images.map((image, index) => (
                <ImageWrap key={image.key}>
                  <Image image={image} identifier='image' />
                </ImageWrap>
              ))}
            </Gallery>
          )}
          <AdditionalDetail>
            <hr />
            <p>{description}</p>
            <br />
            <SocialLinks size={size} />
          </AdditionalDetail>

          <br />
          <br />
          <br />
        </Container>
      </Background>
    </>
  );
};

export default Product;

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.titleColor};
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.pageBackground};
`;
const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 1rem;
  > h3 {
    margin: 0;
  }
`;

const Hero = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 760px) {
    flex-flow: column nowrap;
    margin-bottom: 2rem;
  }
`;

const Showcase = styled.div`
  flex: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  > div {
    height: 41vh;
    width: 46vh;
    border-bottom: 1px solid #333;
    border-right: 1px solid #333;
    border-radius: 1rem;
    background: white;
    box-shadow: 1px 1px 5px whitesmoke;
    overflow: hidden;
    margin: 0.5rem;

    > img {
      height: 41vh;
      width: 46vh;
    }
  }
`;
const Details = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column nowrap;
  padding: 0 3rem;
  text-transform: lowercase;
  > :nth-child(1) {
    text-transform: uppercase;
  }
  @media screen and (max-width: 460px) {
    margin-top: 2rem;
  }
`;
const Gallery = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const Brand = styled.div`
  height: 15rem;
  width: 15rem;
  margin: 0 auto;
  > img {
    height: 100%;
    width: 100%;
  }
`;

const StyledLink = styled.div`
  padding: 0.4rem;
  margin-left: 2.5rem;
  width: 2.3rem;
  position: relative;
  top: 1rem;
  border-radius: 0.3rem;
  color: ${(props) => props.theme.tagLineColor};
  background: ${(props) => props.theme.titleColor};
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 0.7rem;
  &:hover {
    background: ${(props) => props.theme.tagLineColor};
    color: ${(props) => props.theme.titleColor};
  }
`;

const AdditionalDetail = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ImageWrap = styled.div`
  height: 22vh;
  width: 23vh;
  margin: 1rem;
  border: 1px solid #333;
  display: flex;
  > img {
    height: 10vh;
    width: 12vh;
  }
`;

const Social = styled.div`
  height: 10vh;
  width: 35%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.appBackground};
  border-radius: 1rem;
  @media screen and (max-width: 460px) {
    width: 80%;
  }
  > svg {
    transition: 0.2s ease all;
    margin: 0 1rem;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
      transform: scale(0.95);
    }
  }
`;
