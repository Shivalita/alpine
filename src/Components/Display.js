import React from "react";
import { useSelector} from 'react-redux';
import { catalogue } from "./catalogue.js";
import { images } from "./images.js";
import { Row, ButtonGroup } from "react-bootstrap";
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
import DisplayComponent from "./DisplayComponent";
import "./Display.css";
import ButtonOrder from "./ButtonOrder";
import Résumé from "./Résumé.js";

const Display = () => {

  const state = useSelector((state) => state);
  const step = state.stepState.currentStep.step;
  const version = state.personnalisation.version.option;
  
  const displayVersions = () => {
    return Object.keys(catalogue.versions).map((key) => (
      <Versions
        key={catalogue.versions[key].id}
        data={catalogue.versions[key]}
      />
    ));
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        {displayVersions()}
        <Col></Col>
      </Row>

      <Row className="shadow ">
        <CouleurCars className="tittleSideBar" />
        <Col className="sideBar p-5">
          <TittleHeading step={state.stepState.currentStep.step}/>
          <DisplayComponent step={step} version={version}/>
          {/* {console.log('COUCOU')}
          {console.log(step)} */}
          {/* {displayCouleurs()} */}
        </Col>
        <Prix total={state.total.montant}/>
        <ButtonNext currentStep={step}/>
      </Row>
     
    </Container>
  );
};

export default Display;
