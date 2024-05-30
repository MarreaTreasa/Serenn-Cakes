import React from 'react';
import Carousel from 'react-multi-carousel';
import './Carouselx.css';
import 'react-multi-carousel/lib/styles.css';
import Data from './Data';

export default function Carouselx() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='Carou'>
      <Carousel 
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={false}>
        {Data.map(({ id, image, title, description, Price }) => (
          <div key={id} className="box">
            <div className="desc">
              <h1>{title}</h1>
              <p>{description}</p>
              <span>Rs {Price}</span>
            </div>
            <div className="image">
            <img src={image} alt={title} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
