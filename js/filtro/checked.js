import {selectPersona,ingresaPersona,radioEmpresa,filter} from '../variables.js'
function isFilter(){
  if(this.checked){
	selectPersona.style.display='inline';
	ingresaPersona.style.display='none';
	radioEmpresa.style.display='inline';
	}else{
	selectPersona.style.display='none';
	ingresaPersona.style.display='inline';
	radioEmpresa.style.display='none';
	}
}


filter.addEventListener('click', isFilter)

export {isFilter}