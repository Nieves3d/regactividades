export function moduleRadio(a){
    
    
(function clickRadioEmpresa(){
let child= document.querySelectorAll('form[name=registro] input[name=empresa]');
child.forEach(item=>item.addEventListener('click',()=>radioEmpresaChecked(item)))

})();

function radioEmpresaChecked(e){
    empresa= e.value
    crearChildSelect()  
  
}


(function clickRadio(){
let child= document.querySelectorAll('form[name=registro] input[name=modoingreso]');
child.forEach(item=>item.addEventListener('click',()=>radioChecked(item)))

})();

function radioChecked(e){
    a= e.value
  
}
    
}

