import React from 'react';
import { useSelector} from 'react-redux';
import Button from './Button.js';
import {Container, Card} from 'react-bootstrap';
import {images} from './images.js';


const CouleurCars = (props) => {

  const dispatch = useDispatch();
  const optionsState = useSelector((state) => state.personnalisation)
  const carrousel = useSelector((state) => state.carrousel)
  console.log(optionsState)
  console.log(optionsState.version.option)
  console.log(carrousel.img1.src)

  const selectImages = (optionsState) => {
      if ((optionsState.version.option === 'Pure') && 
          (optionsState.couleur.option === 'Peinture opaque Blanc Glacier') &&
          (optionsState.jantes.option === 'Standard')) {
              const arrayImages = [
                  images.configurateur.modele.pure.blanc[0].src,
                  images.configurateur.modele.pure.blanc[1].src,
                  images.configurateur.modele.pure.blanc[2].src,
                  images.configurateur.modele.pure.blanc[3].src
              ]
              console.log(arrayImages)
              return arrayImages;
      }
  }

//   const storeChoice = (props) => {
//     const chosen = {
//         'category' : props.category,
//         'id' : props.choice.data.id,
//         'option' : props.choice.data.option,
//         'prix' : props.choice.data.prix,
//     }
    
//     const chooseOption = () => dispatch({type: "CHOOSE_OPTION", payload: chosen});
//     return chooseOption();
// }
    
    // const DisplayCouleurCars = (option) => {
    //     if (option === 'Pure') {
    //         const color = images.configurateur.modele.selection[0].src;
    //         return color;
    //       } else if (option === 'Legende') {
    //         const color = images.configurateur.modele.selection[1].src;
    //         return color;
    //       }
    // }

    return (
        <section id="HomeCouleurCars">
          <div className="CardContainer  " >
            <Card className="card m-lg-5 d-inline-block shadow" style={{ width: "30rem", border: "none"}}>
                <Card.Img className="p-3" variant="top" src={images.configurateur.modele.selection[0].src}/>
            </Card>
            {selectImages(optionsState)}
            {displayImages(selectImages(optionsState))}
            {<img src={selectImages(optionsState)[1]} />}
          </div>
        </section>
    )
}

export default CouleurCars;