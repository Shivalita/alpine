import React from "react";
import Button from "./Button.js";
import { Container, Card, Carousel } from "react-bootstrap";
import { images } from "./images.js";

const CouleurCars = (props) => {
  // const DisplayCouleurCars = (option) => {
  //     if (option === 'Pure') {
  //         const color = images.configurateur.modele.selection[0].src;
  //         return color;
  //       } else if (option === 'Legende') {
  //         const color = images.configurateur.modele.selection[1].src;
  //         return color;
  //       }
  // }

  return (
    // <section id="HomeCouleurCars">
    //   <div className="CardContainer  " >
    //     <Card className="card mt-5 shadow" style={{ width: "30rem", border: "none"}}>
    //         <Card.Img className="p-3" variant="top" src={images.configurateur.modele.selection[0].src}/>
    //     </Card>
    //   </div>
    // </section>
    
    <Carousel className="card m-auto" style={{ width: "40rem", border: "none"}} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.configurateur.modele.legende[0].src}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.configurateur.modele.legende[1].src}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.configurateur.modele.legende[2].src}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      
  );
};

export default CouleurCars;
