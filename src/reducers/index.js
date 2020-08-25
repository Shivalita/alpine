const initialState = {
    personnalisation: {
        version: { option: "", montant: 0, id: 1 },
        couleur: { option: "", montant: 0, id: 2 },
        jantes: { option: "", montant: 0, id: 3 },
        scellerie: { option: "", montant: 0, id: 4 },
        equipements: { options: {
            design: {option: "", id: 1 },
            media: {option: "", id: 2 },
            confort: {option: "", id: 3 },
            conduite: {option: "", id: 4 },
            securite: {option: "", id: 5 },
            perso_ext: {option: "", id: 6 },
            perso_int: {option: "", id: 7 },
        }, montant: 0, id: 5 },
        accessoires: { options: {
            transport: {option: "", id: 1 },
            multimedia: {option: "", id: 2 },
            interieur: {option: "", id: 3 },
            materiel: {option: "", id: 4 },
            exterieur: {option: "", id: 5 }
        }, montant: 0, id: 6 }
      },
    total: {montant: 0}
  };
   
  function rootReducer(state = initialState, action) {

    if(action.type === "CHOOSE_OPTION"){
      const chosen = action.payload;
      const category = chosen.category
      
      switch(category) {
        case 'couleur':
          console.log(state)
          return  {...state,
            couleur: { ...state.personnalisation.couleur,
              option: state.personnalisation.couleur.option = chosen.option,
              montant: state.personnalisation.couleur.montant += chosen.prix
            }
          }
          break;
        case 'jantes':
          console.log(state)
          return  {...state,
            couleur: { ...state.personnalisation.jantes,
              option: state.personnalisation.jantes.option = chosen.option,
              montant: state.personnalisation.jantes.montant += chosen.prix
            }
          }
          break;
      }
      
    }
    
    // if(action.type === "HIT_BACK"){
    //     const id = action.payload
    //     return  {...state,
    //             players: { ...state.players,
    //                       [id] : { ...state.players[id], 
    //                             pv: state.players[id].pv -5 }
    //                     }
    //     }
    //   }

    // if(action.type === "CHOOSE_COLOR"){
    //     const id = action.payload;
    //     return  {...state,
    //         couleur: { ...state.couleur,
    //             [id] : { ...state.couleur[id], 
    //                 pv: state.players[id].pv -5 }
    //         }
    //   }
    // }
    // if(action.type === "HIT_BACK"){
    //   const id = action.payload
    //   return  {...state,
    //           players: { ...state.players,
    //                     [id] : { ...state.players[id], 
    //                           pv: state.players[id].pv -5 }
    //                   }
    //   }
    // }
    return state;
  };
   
  export default rootReducer;