import React from "react";
import Button from "./Button.js";
import { Container, Card, Carousel } from "react-bootstrap";
import { images } from "./images.js";
import './Prix.css';


const Prix = (props) => {



    return(
        <div className="prixCars mt-5 ml-3">
            <h4>Modèle Configuré : {props.total} €</h4>
        </div>
    )
}

export default Prix; 