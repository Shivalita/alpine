import React from "react";
import Button from "./Button.js";
import { Container, Card, Carousel } from "react-bootstrap";
import { images } from "./images.js";
import './TittleHeading.css';

const TittleHeading = (props) => {

    const displayHead = () => {
        if (props.step != 'resume') {
            return <h6>Selection de {props.step}</h6>;
        } else {
            return <h6>Résumé</h6>
        }
    }

    return(
        <div className="tittleHeading">
            {displayHead()}
        </div>
    )
}

export default TittleHeading;