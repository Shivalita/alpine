import React from 'react';
import {catalogue} from './catalogue.js';
import {images} from './images.js';
import { Row } from 'react-bootstrap';
import {Col, Container, Button} from 'react-bootstrap';
import Versions from './Versions.js';
import Couleurs from './Couleurs.js';
import Jantes from './Jantes.js';
import Scellerie from './Scellerie.js';


const Display = () => {

    const displayVersions = () => {
        return Object.keys(catalogue.versions).map(key => (
          <Versions key={catalogue.versions[key].id} data={catalogue.versions[key]}/>
        ));
    }

    const displayCouleurs = () => {
        return Object.keys(catalogue.couleurs).map(key => (
          <Couleurs key={catalogue.couleurs[key].id} data={catalogue.couleurs[key]}/>
        ));
    }

    const displayJantes = () => {
        return Object.keys(catalogue.jantes).map(key => (
          <Jantes key={catalogue.jantes[key].id} data={catalogue.jantes[key]}/>
        ));
    }

    const displayScellerie = () => {
      return Object.keys(catalogue.scellerie).map(key => (
        <Scellerie key={catalogue.scellerie[key].id} data={catalogue.scellerie[key]}/>
      ));
  }

    // const source = catalogue.versions[0].images.img2;  // AFFICHER UNE IMAGE 
    // const source = images.configurateur.couleur[0].src;


    return (

      <Container>
        <Row>
          <Col></Col>
        {displayVersions()}
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          {displayCouleurs()}
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          {displayJantes()}
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          {displayScellerie()}
          <Col></Col>
        </Row>
      </Container>
          
    )
}

export default Display;