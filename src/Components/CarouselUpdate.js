import React from 'react';
import {useDispatch} from 'react-redux';
import { useSelector} from 'react-redux';
import {images} from './images.js';

const CarouselUpdate = () => {

    const dispatch = useDispatch();
    const optionsState = useSelector((state) => state.personnalisation);

    const selectImages = (optionsState) => {
        console.log('TOTO')
        // console.log(optionsState)
        if (
            (optionsState.version.option === 'Pure') && 
            (optionsState.couleur.option === 'Peinture opaque Blanc Glacier') &&
            (optionsState.jantes.option === 'Standard')
            ) 
        {
            const arrayImages = [
                images.configurateur.modele.pure.blanc[0].src,
                images.configurateur.modele.pure.blanc[1].src,
                images.configurateur.modele.pure.blanc[2].src,
                images.configurateur.modele.pure.blanc[3].src
            ]
            return arrayImages;
  
        } else if (
            (optionsState.version.option === 'Pure') && 
            (optionsState.couleur.option === 'Teinte spéciale Bleu Alpine') &&
            (optionsState.jantes.option === 'Standard')
            ) 
        {
            const arrayImages = [
                images.configurateur.modele.pure.bleu[0].src,
                images.configurateur.modele.pure.bleu[1].src,
                images.configurateur.modele.pure.bleu[2].src,
                images.configurateur.modele.pure.bleu[3].src
            ]
            return arrayImages;
  
        } else if (
            (optionsState.version.option === 'Pure') && 
            (optionsState.couleur.option === 'Teinte métallisée Noir Profond') &&
            (optionsState.jantes.option === 'Standard')
            ) 
        {
            const arrayImages = [
                images.configurateur.modele.pure.noir[0].src,
                images.configurateur.modele.pure.noir[1].src,
                images.configurateur.modele.pure.noir[2].src,
                images.configurateur.modele.pure.noir[3].src
            ]
            return arrayImages;
        }
    }

    const updateCarousel = (array) => {
        console.log('bordel de merde')
        dispatch({type: "UPDATE_CAROUSEL", payload: array});
    }
 
    return (
      <div>
        {console.log('TOTO BORDEL')}
        {updateCarousel(selectImages(optionsState))}
      </div> 
    );

}
  
export default CarouselUpdate;
  