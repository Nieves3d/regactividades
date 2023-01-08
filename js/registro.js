 function createRegistro(ingSal,comoIngSal,empresa,detalles)
 {
  
  let b='';
  let i;
  if(isFilte.checked){
  for(i=0;i<personal.length;i++){
      b+=personal[i].selected?`_ ${personal[i].value}
      `:'';
      console.log(b)
  }}else{b=ingresaPersona.value}

hora= new Date();
hora= hora.toString().slice(16,22)
  createE= document.createElement("p");
  ingSal=='Ingresa'?createE.style.color='green':createE.style.color='red'
  createE.innerText= `${hora} - ${ingSal} ${comoIngSal} personal ${empresa}
 ${b}${detalles?' con '+detalles:''}`
  app.appendChild(createE)
  ingresaPersona.value='';
  
  app.scrollTop=app.scrollHeight
  
  for(i=0;i<personal.length;i++){
    personal[i].selected=false 
  }
}

export {createRegistro}
