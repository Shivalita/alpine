const initialState = {

    personnalisation: {
        version: { option: "Pure", montant: 54700, id: 1 },

        couleur: { option: "Teinte spéciale Bleu Alpine", montant: 0, id: 2 },

        jantes: { option: "Standard", montant: 0, id: 3 },

        scellerie: { option: "Sièges baquets en cuir noir et Dinamica", montant: 0, id: 4 },

        equipements: { 
            options: {
              design: { option: "", id: 1 },
              media: { option: "", id: 2 },
              confort: { option: "", id: 3 },
              conduite: { option: "", id: 4 },
              securite: { option: "", id: 5 },
              perso_ext: { option: "", id: 6 },
              perso_int: { option: "", id: 7 },
            }, 
            montant: 0, id: 5 
        },

        accessoires: {  
            options: {
              transport: { option: "", id: 1 },
              multimedia: { option: "", id: 2 },
              interieur: { option: "", id: 3 },
              materiel: { option: "", id: 4 },
              exterieur: { option: "", id: 5 }
            }, 
            montant: 0, id: 6 
        }
      },
      
    carousel: {
      img1: { src: "../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg", id: 0 },
      img2: { src: "../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg", id: 1 },
      img3: { src: "../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg", id: 2 },
      img4: { src: "../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg", id: 3 }
    },

    stepState: { step: "version", id: 0 },

    total: { montant: 0 }
};
   
  function rootReducer(state = initialState, action) {

    if (action.type === "CHOOSE_OPTION") {
      const chosen = action.payload;
      const category = chosen.category;
      
      switch(category) {
        case 'version':
          return  {...state,
            personnalisation: {...state.personnalisation,
              version: {...state.personnalisation.version,
                option: state.personnalisation.version.option = chosen.option,
                montant: state.personnalisation.version.montant = chosen.prix
              }
            },
            total: { ...state.total,
              montant: state.total.montant =
              (state.personnalisation.version.montant) + 
              (state.personnalisation.couleur.montant) + 
              (state.personnalisation.jantes.montant) + 
              (state.personnalisation.scellerie.montant) + 
              (state.personnalisation.equipements.montant) + 
              (state.personnalisation.accessoires.montant)
            }
          }

        case 'couleur':
          return  {...state,
            personnalisation: {...state.personnalisation,
              couleur: {...state.personnalisation.couleur,
                option: state.personnalisation.couleur.option = chosen.option,
                montant: state.personnalisation.couleur.montant = chosen.prix
              }
            },
            total: { ...state.total,
              montant: state.total.montant =
              (state.personnalisation.version.montant) + 
              (state.personnalisation.couleur.montant) + 
              (state.personnalisation.jantes.montant) + 
              (state.personnalisation.scellerie.montant) + 
              (state.personnalisation.equipements.montant) + 
              (state.personnalisation.accessoires.montant)
          }
        }

        case 'jantes':
          return  {...state,
            personnalisation: {...state.personnalisation,
              jantes: {...state.personnalisation.jantes,
                option: state.personnalisation.jantes.option = chosen.option,
                montant: state.personnalisation.jantes.montant = chosen.prix
              }
            },
            total: { ...state.total,
              montant: state.total.montant =
              (state.personnalisation.version.montant) + 
              (state.personnalisation.couleur.montant) + 
              (state.personnalisation.jantes.montant) + 
              (state.personnalisation.scellerie.montant) + 
              (state.personnalisation.equipements.montant) + 
              (state.personnalisation.accessoires.montant)
            }
          }

        case 'scellerie':
          return  {...state,
            personnalisation: {...state.personnalisation,
              scellerie: {...state.personnalisation.scellerie,
                option: state.personnalisation.scellerie.option = chosen.option,
                montant: state.personnalisation.scellerie.montant = chosen.prix
              }
            },
            total: { ...state.total,
              montant: state.total.montant =
              (state.personnalisation.version.montant) + 
              (state.personnalisation.couleur.montant) + 
              (state.personnalisation.jantes.montant) + 
              (state.personnalisation.scellerie.montant) + 
              (state.personnalisation.equipements.montant) + 
              (state.personnalisation.accessoires.montant)
            }
          }
      }
    }


    if (action.type === "UPDATE_CAROUSEL") {
      const imagesArray = action.payload;
      // console.log(imagesArray)

      return  {...state,
        carousel : {...state.carousel,
          img1: { ...state.carousel.img1,
            src: state.carousel.img1.src = imagesArray[0],
          },
          img2: { ...state.carousel.img2,
            src: state.carousel.img1.src = imagesArray[1],
          },
          img3: { ...state.carousel.img3,
            src: state.carousel.img1.src = imagesArray[2],
          },
          img4: { ...state.carousel.img4,
            src: state.carousel.img1.src = imagesArray[3],
          }
      }
    }
  }
    
    return state;
  };
   
  export default rootReducer;