const initialState = {

    personnalisation: {
        version: { option: "", montant: 0, id: 1 },

        couleur: { option: "", montant: 0, id: 2 },

        jantes: { option: "", montant: 0, id: 3 },

        scellerie: { option: "", montant: 0, id: 4 },

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
      
    carrousel : {
        img1: { src: "", id: 1 },
        img2: { src: "", id: 2 },
        img3: { src: "", id: 3 },
        img4: { src: "", id: 4 }
    },

    total: { montant: 0 }
};
   
  function rootReducer(state = initialState, action) {

    if (action.type === "CHOOSE_OPTION") {
      const chosen = action.payload;
      const category = chosen.category;
      
      switch(category) {
        case 'version':
          console.log(state)
          return  {...state,
            couleur: { ...state.personnalisation.version,
              option: state.personnalisation.version.option = chosen.option,
              montant: state.personnalisation.version.montant = chosen.prix
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
          console.log(state)

          return  {...state,
            couleur: { ...state.personnalisation.couleur,
              option: state.personnalisation.couleur.option = chosen.option,
              montant: state.personnalisation.couleur.montant = chosen.prix
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
          console.log(state)
          return  {...state,
            couleur: { ...state.personnalisation.jantes,
              option: state.personnalisation.jantes.option = chosen.option,
              montant: state.personnalisation.jantes.montant = chosen.prix
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
          console.log(state)
          return  {...state,
            couleur: { ...state.personnalisation.scellerie,
              option: state.personnalisation.scellerie.option = chosen.option,
              montant: state.personnalisation.scellerie.montant = chosen.prix
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
    
    return state;
  };
   
  export default rootReducer;