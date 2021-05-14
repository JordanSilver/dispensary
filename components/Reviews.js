import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const Reviews = ({ reviews }) => {
  return (
    <Container>
      {reviews && (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition='all .5s ease'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {reviews.map((review, index) => (
            <Card key={review.id}>
              <h1>{review.title}</h1>
              <p>{review.review}</p>
              <h4>{review.title} Author</h4>
              <br />
            </Card>
          ))}
        </Carousel>
      )}
    </Container>
  );
};

export default Reviews;

const Container = styled.div`
  height: 100%;
  padding: 0 3rem;
  text-align: center;
`;

const Card = styled.div`
  margin: 1rem;
  font-size: 0.7rem;
  padding: 1rem;
  height: 90%;
  background: white;
  border-radius: 1rem;
  border-bottom: 1px solid #333;
  border-right: 1px solid #333;
  color: black;
  box-shadow: 1px 1px 5px ${(props) => props.theme.appBackground};
`;
