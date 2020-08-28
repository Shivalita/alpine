import React, {useState, useEffect} from "react";
import Versions from "./Versions.js";
import Couleurs from "./Couleurs.js";
import Jantes from "./Jantes.js";
import Scellerie from "./Scellerie.js";
import Résumé from "./Résumé.js";
import { catalogue } from "./catalogue.js";
import { useSelector} from 'react-redux';

const DisplayComponent = (props) => {

  const state = useSelector((state) => state);

  const options = {
      version: {name: 'Version', option: state.personnalisation.version.option, montant: state.personnalisation.version.montant, id: 0},
      couleur: {name: 'Couleur', option: state.personnalisation.couleur.option, montant: state.personnalisation.couleur.montant, id: 1},
      jantes: {name: 'Jantes', option: state.personnalisation.jantes.option, montant: state.personnalisation.jantes.montant, id: 2},
      scellerie: {name: 'Scellerie', option: state.personnalisation.scellerie.option, montant: state.personnalisation.scellerie.montant, id: 3},
  }

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

      const displayResume = () => {
        return Object.keys(options).map((key) => (
          <Résumé
            key={options[key].id}
            data={options[key]}
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

          case 'resume':
            return displayResume();
            
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
