import {personalCala, personalCyC, darSalud} from '../datos.js'

function getDaPeByBu(a){
    let b='';
        switch(a){
            case 'cala':
            b=personalCala;
            break;
            case 'C&C':
            b= personalCyC;
            break;
            case 'darSalud':
            b=darSalud;
            break;
        }
    
    return b.split(',').map((a)=>a.trim()).sort()
    }

export {getDaPeByBu}