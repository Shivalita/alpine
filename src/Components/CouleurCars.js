import React from 'react';
import {useDispatch} from 'react-redux';
import { useSelector} from 'react-redux';
import Button from './Button.js';
import {Container, Card, Carousel} from 'react-bootstrap';
import {images} from './images.js';

const CouleurCars = (props) => {

  const carousel = useSelector((state) => state.carousel)

  const displayImages = () => {

    return Object.keys(carousel).map((key) => {
      return(
      <Carousel.Item key={carousel[key].id}>
        <img
          className="d-block w-100"
          src={carousel[key].src}
          alt={"Slide " + carousel[key].id}
        />
      </Carousel.Item>
    )});
  };

  return (
    <Carousel className="card m-auto" style={{ width: "40rem", border: "none"}} >
      {displayImages()}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={selectImages(optionsState)[0]}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={selectImages(optionsState)[1]}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={selectImages(optionsState)[2]}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={selectImages(optionsState)[3]}
          alt="Fourth slide"
        />
      </Carousel.Item> */}
    </Carousel>
      
  );
};

export default CouleurCars;
