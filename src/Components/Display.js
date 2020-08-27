import React from "react";
import { catalogue } from "./catalogue.js";
import { images } from "./images.js";
import { Row } from "react-bootstrap";
import { Col, Container, Button } from "react-bootstrap";
import Versions from "./Versions.js";
import Couleurs from "./Couleurs.js";
import Jantes from "./Jantes.js";
import Scellerie from "./Scellerie.js";
import CouleurCars from "./CouleurCars";
import Prix from "./Prix";
import ButtonNext from "./ButtonNext";
import TittleHeading from "./TittleHeading";
import Equipement from "./Equipement.js";
import "./Display.css";

const Display = () => {
  
  const displayVersions = () => {
    return Object.keys(catalogue.versions).map((key) => (
      <Versions
        key={catalogue.versions[key].id}
        data={catalogue.versions[key]}
      />
    ));
  };

  const displayCouleurs = () => {
    return Object.keys(catalogue.couleurs).map((key) => (
      <Couleurs
        key={catalogue.couleurs[key].id}
        data={catalogue.couleurs[key]}
      />
    ));
  };

  // const displayCouleurCars = () => {
  //   return Object.keys(images.configurateur.modele.selection).map(key => (
  //     <Couleurs key={images.configurateur.modele.selection[key].id} data={images.configurateur.modele.selection[key]}/>
  //   ));
  // }

  const displayJantes = () => {
    return Object.keys(catalogue.jantes).map((key) => (
      <Jantes 
        key={catalogue.jantes[key].id} 
        data={catalogue.jantes[key]} 
      />
    ));
  };

  const displayScellerie = () => {
    return Object.keys(catalogue.scellerie).map((key) => (
      <Scellerie
        key={catalogue.scellerie[key].id}
        data={catalogue.scellerie[key]}
      />
    ));
  };

  const displayEquipement = () => {
    return Object.keys(catalogue.equipements.design).map((key) => (
      <Equipement
        key={catalogue.equipements.design[key].id}
        data={catalogue.equipements.design[key]}
      />
    ));
  };

  // const source = catalogue.versions[0].images.img2;  // AFFICHER UNE IMAGE
  // const source = images.configurateur.couleur[0].src;

  return (
    <Container>
      <Row>
        <Col></Col>
        {displayVersions()}
        <Col></Col>
        {/* {displayCouleurs()}
            {displayJantes()} */}
        {/* <img src={source} alt="toto"></img> */}
      </Row>

      <Row className="shadow ">
<<<<<<< HEAD
        <CouleurCars />
        <Col>{displayCouleurs()}</Col>

        {displayJantes()}

=======
        <CouleurCars className="tittleSideBar " />
        <Col className="sideBar p-5">
          <TittleHeading />
          {displayCouleurs()}
        </Col>
        {/* {displayScellerie()} */}
        {/* {displayJantes()} */}
        {/* {displayEquipement()} */}

        <Prix/>
        <ButtonNext />
>>>>>>> c246c84b0df096d668b6b032d13873a3e42414b3
      </Row>
      {/* {displayJantes()} */}
    </Container>
  );
};

export default Display;
