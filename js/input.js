import {empresa,selectPersona} from './variables.js'
import {getDaPeByBu} from './filtro/getDataPeapolBybusiness.js'
function crearChildSelect(){
    let childSelect;
    getDaPeByBu(empresa).forEach(item=>{
 childSelect = document.createElement('option');
 
 childSelect.value=item;
//ls.appendChild(childSelect)
 childSelect.label=item.slice(0,length-6);
selectPersona.appendChild(childSelect);

})
};

export {crearChildSelect}
