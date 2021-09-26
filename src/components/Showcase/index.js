import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Custom style for resizing low-res images, to be removed later
const imgStyles = {
  height: '87vh',
};

const boxsize = {
  margin: '0px',
  padding: '0px',
};

const Showcase = () => {
  return (
    <Carousel
      fade={true}
      interval={3000}
      className="container-fluid"
      style={boxsize}
    >
      <Carousel.Item>
        <img
          className="w-100"
          src="/images/img1.jpg"
          alt="First slide"
          style={imgStyles}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="w-100"
          src="/images/img3.jpg"
          alt="Second slide"
          style={imgStyles}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="w-100"
          src="/images/img2.jpg"
          alt="Third slide"
          style={imgStyles}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Showcase;
