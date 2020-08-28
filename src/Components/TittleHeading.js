import React from "react";
import Button from "./Button.js";
import { Container, Card, Carousel } from "react-bootstrap";
import { images } from "./images.js";
import './TittleHeading.css';

const TittleHeading = (props) => {


    return(
        <div className="tittleHeading">
            <h6>Selection de {props.step}</h6>
        </div>
    )
}

export default TittleHeading;