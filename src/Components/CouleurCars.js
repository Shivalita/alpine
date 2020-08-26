import React from 'react';
import Button from './Button.js';
import {Container, Card} from 'react-bootstrap';
import {images} from './images.js';


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
        <section id="HomeCouleurCars">
          <div className="CardContainer  " >
            <Card className="card m-lg-5 d-inline-block shadow" style={{ width: "30rem", border: "none"}}>
                <Card.Img className="p-3" variant="top" src={images.configurateur.modele.selection[0].src}/>
            </Card>
          </div>
        </section>
    )
}

export default CouleurCars;