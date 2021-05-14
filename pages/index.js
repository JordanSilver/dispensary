import styled from 'styled-components';
import Head from 'next/head';
import Hero from '../components/Hero';
import { sanityClient, urlFor } from '../sanity';
import Link from 'next/link';
import Image from '../components/Image';
import Info from '../components/Info';
import Reviews from '../components/Reviews';
import CarouselComp from '../components/Carousel';
import Contact from '../components/Contact';
import { useState } from 'react';
import SocialLinks from '../components/SocialLinks';

export const getServerSideProps = async () => {
  const getProducts = '*[ _type == "product"]';
  const products = await sanityClient.fetch(getProducts);
  const getPhoto = '*[ _type == "gallery"]';
  const gallery = await sanityClient.fetch(getPhoto);
  const getReview = '*[ _type == "review"]';
  const reviews = await sanityClient.fetch(getReview);
  const getCategory = '*[ _type == "categories"]';
  const category = await sanityClient.fetch(getCategory);

  const getPopular = '*[popular]';
  const popular = await sanityClient.fetch(getPopular);

  if (!products.length) {
    return {
      props: {
        products: [],
        gallery: [],
        reviews: [],
        popular: [],
        category: [],
      },
    };
  } else {
    return {
      props: {
        products,
        gallery,
        reviews,
        popular,
        category,
      },
    };
  }
};

export default function Home({
  products,
  gallery,
  reviews,
  popular,
  category,
}) {
  const size = 40;

  const [title, showTitle] = useState(false);

  const handleTitle = () => {
    showTitle(!title);
  };

  return (
    <div>
      <Head>
        <title>Next JS Template</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CarouselComp gallery={gallery} />
      <Container>
        <Contact />
        <Title>
          <h1>Categories</h1>
          <Line>
            <hr />
          </Line>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            totam!
          </p>
        </Title>
        <Category>
          <Flower>
            <Link href={`/category/${category[0].slug.current}`}>
              <div>
                <Image
                  image={category[0].image}
                  alt={category[0].name}
                  identifier='image'
                />

                {category[0].name}
              </div>
            </Link>
          </Flower>
          <Edible>
            <Link href={`/category/${category[1].slug.current}`}>
              <div>
                <Image
                  image={category[1].image}
                  alt={category[1].name}
                  identifier='image'
                />

                {category[1].name}
              </div>
            </Link>
          </Edible>
        </Category>
        <Title>
          <h1>Our Best Sellers</h1>
          <Line>
            <hr />
          </Line>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            totam!
          </p>
        </Title>
        <MobileTap>
          <i>tap products for details</i> <br />
        </MobileTap>
        {popular && (
          <ProductDisplay>
            {popular.map((product, index) => (
              <Card key={product.id} onClick={handleTitle}>
                <Link href={`${product.slug.current}`}>
                  <CardTitle className={title ? 'title-active' : 'title'}>
                    {product.name} <Details>tap for details</Details>
                  </CardTitle>
                </Link>
                <Image image={product.image} alt='' identifier='image' />
              </Card>
            ))}
          </ProductDisplay>
        )}
        <Title>
          <h1>Client Reviews</h1>
          <Line>
            <hr />
          </Line>
          <p>Lorem ipsum dolor sit amet.</p>
        </Title>
        <Reviews reviews={reviews} />
      </Container>
      <Info />
      <SocialLinks size={size} />
    </div>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 1500px;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.titleColor};
  transition: all 0.1s ease;
`;

const ProductDisplay = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 460px) {
    gap: 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  min-height: 18rem;
  min-width: 18rem;
  cursor: pointer;
  max-width: 18rem;
  max-height: 18rem;
  background: white;
  color: black;
  overflow: hidden;
  transition: all 0.1s ease;
  box-shadow: 1px 1px 5px ${(props) => props.theme.btnColor};
  &:hover {
    transform: scale(0.97);
  }
  @media screen and (max-width: 460px) {
    min-height: 9rem;
    min-width: 9rem;
    max-width: 9rem;
    max-height: 9rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;

  > p {
    font-size: 1.3rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 460px) {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;

const Line = styled.div`
  margin: 0 auto;
  width: 30%;
`;

const CardTitle = styled.div`
  position: relative;
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  z-index: 100;
  text-align: center;
  @media screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;

const Details = styled.div`
  font-size: 1rem;
  color: #878787;
  font-weight: 300;
  @media screen and (max-width: 460px) {
    font-size: 0.6rem;
  }
`;

const MobileTap = styled.div`
  display: none;
  @media screen and (max-width: 460px) {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }
`;

const Category = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Flower = styled.div`
  height: 100%;
  flex: 0.5;
  cursor: pointer;
  > div img {
    height: 22rem;
    width: 18rem;
    border-radius: 0.5rem;
    @media screen and (max-width: 460px) {
      width: 8rem;
      height: 12rem;
    }
  }
`;
const Edible = styled.div`
  height: 100%;
  flex: 0.5;
  cursor: pointer;
  > div img {
    height: 22rem;
    width: 18rem;
    border-radius: 0.5rem;
    @media screen and (max-width: 460px) {
      width: 8rem;
      height: 12rem;
    }
  }
`;
