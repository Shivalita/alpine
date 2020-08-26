import pure from '../images/sources-homepage/versions/ALPINE-PURE-1.png';
import compoPure from '../images/sources-homepage/versions/COMPO-PURE.png';
import legende from '../images/sources-homepage/versions/ALPINE-LEGENDE-1.png';
import compoLegende from '../images/sources-homepage/versions/COMPO-LEGENDE.png';



export const catalogue = {
    'versions' : [
        {
            'id' : 0, 
            'option' : 'Pure', 
            'prix' : 54700, 
            'images' : {
                'img1' : pure,
                'img2' : compoPure
            }
        },
        {
            'id' : 1, 
            'option' : 'Legende', 
            'prix' : 58500, 
            'images' : {
                'img1' : legende,
                'img2' : compoLegende
            }
        }
    ],
    'couleurs' : [
        {'id' : 0, 'option' : 'Teinte spéciale Bleu Alpine', 'prix' : 1800},
        {'id' : 1, 'option' : 'Teinte métallisée Noir Profond', 'prix' : 840},
        {'id' : 2, 'option' : 'Peinture opaque Blanc Glacier', 'prix' : 0},
    ],
    'jantes' : [
        {'id' : 0, 'option' : 'Standard', 'prix' : 0, 'exclusivite' : ''},
        {'id' : 1, 'option' : 'Serac', 'prix' : 1000, 'exclusivite' : ''},
        {'id' : 2, 'option' : 'Legende', 'prix' : 0, 'exclusivite' : 'legende'}
    ],
    'scellerie' : [
        {'id' : 0, 'option' : 'Sièges baquets en cuir noir et Dinamica', 'prix' : 0, 'exclusivite' : 'pure'},
        {'id' : 1, 'option' : 'Sièges Confort en cuir noir perforé', 'prix' : 800, 'exclusivite' : 'pure'},
        {'id' : 2, 'option' : 'Sièges Confort en cuir noir', 'prix' : 0, 'exclusivite' : 'legende'},
        {'id' : 3, 'option' : 'Sièges Confort en cuir brun', 'prix' : 800, 'exclusivite' : 'legende'},
    ],
    'equipements' : {
        'design' : [
            {'id' : 0, 'option' : 'Pack heritage', 'prix' : 180},
            {'id' : 1, 'option' : 'Repose-pieds passager en aluminium', 'prix' : 96}
        ],
        'media_navigation': [
            {'id' : 0, 'option' : 'Alpine telemetrics', 'prix' : 204},
            {'id' : 1, 'option' : 'Systeme audio focal', 'prix' : 600},
            {'id' : 2, 'option' : 'Systeme audio focal premium', 'prix' : 1200},
            {'id' : 3, 'option' : 'Systeme audio standard', 'prix' : 0}
        ],
        'confort' : [
            {'id' : 0, 'option' : 'Retroviseur interieur électrochrome', 'prix' : 0},
            {'id' : 1, 'option' : 'Rétroviseurs ext. chauf. rabattables élec.', 'prix' : 504},
            {'id' : 2, 'option' : 'Pack de rangement', 'prix' : 504},
            {'id' : 3, 'option' : 'Régulateur / limiteur de vitesse', 'prix' : 0}
        ],
        'conduite' : [
            {'id' : 0, 'option' : 'Aide au stationnement AR', 'prix' : 420},
            {'id' : 1, 'option' : 'Aide au stationnement AV et AR', 'prix' : 750},
            {'id' : 2, 'option' : 'Aide au stationnement AV AR et caméra de recul', 'prix' : 1200},
            {'id' : 3, 'option' : 'Echappement sport actif', 'prix' : 1500}
        ],
        'securite' : [
            {'id' : 0, 'option' : 'Système de freinage Haute-Perf 320mm', 'prix' : 1000},
            {'id' : 1, 'option' : 'Assistance au freinage d\'urgence', 'prix' : 0},
            {'id' : 2, 'option' : 'Airbags frontaux conducteur et passager', 'prix' : 0}
        ],
        'perso_exterieures' : [
            {'id' : 0, 'option' : 'Etriers de frein couleur bleu alpine', 'prix' : 384},
            {'id' : 1, 'option' : 'Logo alpine sur les ailes avant', 'prix' : 120},
            {'id' : 2, 'option' : 'Etriers de frein couleur gris anthracite', 'prix' : 0}
        ],
        'perso_interieures' : [
            {'id' : 0, 'option' : 'Pedalier en aluminium', 'prix' : 120},
            {'id' : 1, 'option' : 'Harmonie carbone mat', 'prix' : 0},
            {'id' : 2, 'option' : 'Logo au centre du volant en bleu alpine', 'prix' : 84},
            {'id' : 3, 'option' : 'Sieges chauffants', 'prix' : 400}
        ]
    },
    'accessoires' : {
        'transport_protection' : [
            {'id' : 0, 'option' : 'Extincteur 1kg avec manomètre', 'prix' : 22},
            {'id' : 1, 'option' : 'Chaine à neige Premium Grip', 'prix' : 336},
            {'id' : 2, 'option' : 'Alarme', 'prix' : 543},
            {'id' : 3, 'option' : 'Protection Prise OBD', 'prix' : 99},
            {'id' : 4, 'option' : 'kit de securité', 'prix' : 20},
            {'id' : 5, 'option' : 'Fixation extincteur', 'prix' : 72}
        ],
        'multimedia' : [
            {'id' : 0, 'option' : 'Support camera sport', 'prix' : 89},
            {'id' : 1, 'option' : 'Support smartphone magnétique - Fixation sur tableau de bord', 'prix' : 21}
        ],
        'interieur' : [
            {'id' : 0, 'option' : 'Tapis de coffre', 'prix' : 83},
            {'id' : 1, 'option' : 'Filet de rangement - Horizontal', 'prix' : 59}
        ],
        'materiel_garage' : [
            {'id' : 0, 'option' : 'Chargeur de batterie', 'prix' : 240},
            {'id' : 1, 'option' : 'kit Outils Alpine', 'prix' : 398}
        ],
        'exterieur' : [
            {'id' : 0, 'option' : 'Cabochons Alpine_Métallisés', 'prix' : 24},
            {'id' : 1, 'option' : 'Housse de protection Alpine', 'prix' : 216},
            {'id' : 2, 'option' : 'Antivols pour jantes - Noirs', 'prix' : 51}
        ]
    }
}