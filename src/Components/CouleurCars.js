import React from 'react';
import {useDispatch} from 'react-redux';
import { useSelector} from 'react-redux';
import Button from './Button.js';
import {Container, Card, Carousel} from 'react-bootstrap';
import {images} from './images.js';

const CouleurCars = (props) => {

  // const carousel = useSelector((state) => state.carousel);
  const optionsState = useSelector((state) => state.personnalisation);

  // const images = props.images;

  const displayImages = () => {

    const selectImages = () => {

      if (
        (optionsState.version.option === 'Pure') && 
        (optionsState.couleur.option === 'Peinture opaque Blanc Glacier') &&
        (optionsState.jantes.option === 'Standard')
        ) 
      {
        const arrayImages = {
          img1: {src: images.configurateur.modele.pure.blanc[0].src, id: 0},
          img2: {src: images.configurateur.modele.pure.blanc[1].src, id: 1},
          img3: {src: images.configurateur.modele.pure.blanc[2].src, id: 2},
          img4: {src: images.configurateur.modele.pure.blanc[3].src, id: 3},
        }
        return arrayImages;
  
      } else if (
          (optionsState.version.option === 'Pure') && 
          (optionsState.couleur.option === 'Teinte spéciale Bleu Alpine') &&
          (optionsState.jantes.option === 'Standard')
          ) 
      {
          const arrayImages = {
            img1: {src: images.configurateur.modele.pure.bleu[0].src, id: 0},
            img2: {src: images.configurateur.modele.pure.bleu[1].src, id: 1},
            img3: {src: images.configurateur.modele.pure.bleu[2].src, id: 2},
            img4: {src: images.configurateur.modele.pure.bleu[3].src, id: 3},
          }
          return arrayImages;
    
      } else if (
          (optionsState.version.option === 'Pure') && 
          (optionsState.couleur.option === 'Teinte métallisée Noir Profond') &&
          (optionsState.jantes.option === 'Standard')
          ) 
      {
          const arrayImages = {
            img1: {src: images.configurateur.modele.pure.noir[0].src, id: 0},
            img2: {src: images.configurateur.modele.pure.noir[1].src, id: 1},
            img3: {src: images.configurateur.modele.pure.noir[2].src, id: 2},
            img4: {src: images.configurateur.modele.pure.noir[3].src, id: 3},
          }
          return arrayImages;


      } else if (
        (optionsState.version.option === 'Pure') && 
        (optionsState.couleur.option === 'Peinture opaque Blanc Glacier') &&
        (optionsState.jantes.option === 'Serac')
        ) 
      {
        const arrayImages = {
          img1: {src: images.configurateur.modele.pure.blanc[4].src, id: 0},
          img2: {src: images.configurateur.modele.pure.blanc[5].src, id: 1},
          img3: {src: images.configurateur.modele.pure.blanc[6].src, id: 2},
          img4: {src: images.configurateur.modele.pure.blanc[7].src, id: 3},
        }
        return arrayImages;
      }
      else if (
          (optionsState.version.option === 'Pure') && 
          (optionsState.couleur.option === 'Teinte spéciale Bleu Alpine') &&
          (optionsState.jantes.option === 'Serac')
          ) 
      {
          const arrayImages = {
            img1: {src: images.configurateur.modele.pure.bleu[4].src, id: 0},
            img2: {src: images.configurateur.modele.pure.bleu[5].src, id: 1},
            img3: {src: images.configurateur.modele.pure.bleu[6].src, id: 2},
            img4: {src: images.configurateur.modele.pure.bleu[7].src, id: 3},
          }
          return arrayImages;
    
      } else if (
          (optionsState.version.option === 'Pure') && 
          (optionsState.couleur.option === 'Teinte métallisée Noir Profond') &&
          (optionsState.jantes.option === 'Serac')
          ) 
      {
          const arrayImages = {
            img1: {src: images.configurateur.modele.pure.noir[4].src, id: 0},
            img2: {src: images.configurateur.modele.pure.noir[5].src, id: 1},
            img3: {src: images.configurateur.modele.pure.noir[6].src, id: 2},
            img4: {src: images.configurateur.modele.pure.noir[7].src, id: 3},
          }
          return arrayImages;

          
      } 


      else if (
        (optionsState.version.option === 'Legende') && 
        (optionsState.couleur.option === 'Peinture opaque Blanc Glacier')
        // (optionsState.jantes.option === 'Legende')
        ) 
      {
        const arrayImages = {
          img1: {src: images.configurateur.modele.legende[0].src, id: 0},
          img2: {src: images.configurateur.modele.legende[1].src, id: 1},
          img3: {src: images.configurateur.modele.legende[2].src, id: 2},
          img4: {src: images.configurateur.modele.legende[3].src, id: 3},
        }
        return arrayImages;
  
      } else if (
          (optionsState.version.option === 'Legende') && 
          (optionsState.couleur.option === 'Teinte spéciale Bleu Alpine')
          // (optionsState.jantes.option === 'Legende')
          ) 
      {
          const arrayImages = {
            img1: {src: images.configurateur.modele.legende[4].src, id: 0},
            img2: {src: images.configurateur.modele.legende[5].src, id: 1},
            img3: {src: images.configurateur.modele.legende[6].src, id: 2},
            img4: {src: images.configurateur.modele.legende[7].src, id: 3},
          }
          return arrayImages;
    
      } else if (
          (optionsState.version.option === 'Legende') && 
          (optionsState.couleur.option === 'Teinte métallisée Noir Profond')
          // (optionsState.jantes.option === 'Legende')
          ) 
      {
          const arrayImages = {
            img1: {src: images.configurateur.modele.legende[8].src, id: 0},
            img2: {src: images.configurateur.modele.legende[9].src, id: 1},
            img3: {src: images.configurateur.modele.legende[10].src, id: 2},
            img4: {src: images.configurateur.modele.legende[11].src, id: 3},
          }
          return arrayImages;

      }
    }

      const imagesArray = selectImages(); 

      return Object.keys(imagesArray).map((key) => {
        console.log(imagesArray);
        return (
        <Carousel.Item key={imagesArray[key].id}>
          <img
            className="d-block w-100"
            src={imagesArray[key].src}
            alt={"Slide " + imagesArray[key].id}
          />
        </Carousel.Item>
      )});

    }
    

  return (
    <Carousel className="card m-auto" style={{ width: "40rem", border: "none"}} >
      {displayImages()}
    </Carousel>
  );
};

export default CouleurCars;
