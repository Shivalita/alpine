import React, {useState, useEffect} from "react";
import Versions from "./Versions.js";
import Couleurs from "./Couleurs.js";
import Jantes from "./Jantes.js";
import Scellerie from "./Scellerie.js";
import { catalogue } from "./catalogue.js";


const DisplayComponent = (props) => {

  const version = props.version;

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
    
      const displayJantes = () => {
        return Object.keys(catalogue.jantes).map((key) => (
          <Jantes 
            key={catalogue.jantes[key].id} 
            data={catalogue.jantes[key]} 
            version={version}
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

    const displayStepComponent = (step) => {
        switch (step) {
          case 'version':
            return displayVersions();
    
          case 'couleur':
            return displayCouleurs();
        
          case 'jantes':
            return displayJantes();
        
          case 'scellerie':
            return displayScellerie();
            
          default:
            return displayCouleurs();
        }
    }

    return (
        <div>
            {displayStepComponent(props.step)}
            {/* {console.log(props.step)} */}
        </div>
    )
}

export default DisplayComponent;
