import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from '../components/Image';
import styled from 'styled-components';
import { FaPlug } from 'react-icons/fa';

const CarouselComp = ({ gallery }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Background>
      {gallery && (
        <Wrap>
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            customTransition='all .5s ease'
            transitionDuration={500}
            containerClass='carousel-container'
            // removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass='custom-dot-list-style'
            itemClass='carousel-item-padding-40-px'
          >
            {gallery.map((picture, index) => (
              <div key={picture.id}>
                <Image image={picture.image} identifier='image' alt='' />
              </div>
            ))}
          </Carousel>
          <Brand>
            <Title>
              <span>MOTA</span> <FaPlug />
            </Title>
            <SubTitle>Your local plug</SubTitle>
          </Brand>
        </Wrap>
      )}
    </Background>
  );
};

export default CarouselComp;

const Background = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.appBackground};
  padding: 2rem 0;
`;

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.div`
  background: ${(props) => props.theme.appBackground};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  > svg {
    margin-right: 1rem;
    margin-top: 1rem;
  }
`;
const SubTitle = styled.div`
  background: ${(props) => props.theme.appBackground};
  padding: 0.5rem;
`;
const Brand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 700;
  background: ${(props) => props.theme.appBackground};
  color: ${(props) => props.theme.titleColor};
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 660px) {
    font-size: 1rem;
  }
`;
