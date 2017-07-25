function pasajeros(name, lastname, dni){
  this.name = name;
  this.lastname = lastname;
  this.dni =dni;
  this.numAsiento = numAsiento;
}

function  asientos(buscar, listar, cancelar, reservar){
  this.isBusy =false;
  this.reservar=function(){
    var mostrar=document.getElementById("mostrar");
    var numeroAsiento = parseInt (mostrar.textContent);
   if (numeroAsiento.length === 0)
      return;
    arreglo[numeroAsiento-1] = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        dni: document.getElementById("dni").value,
    }
    console.log(arreglo);

    celdaActual.style.backgroundColor = 'yellow';

    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("dni").value = "";
   }

  }
  this.buscar = function(){
  var html = "";
  var buscarDni = document.getElementById("dni").value;
  for(var i=1; i<arreglo.length; i++){
    var dato_1 = arreglo[i-1];
    if(arreglo[i-1]!= undefined && buscarDni == dato_1.dni){
  var s = "<div>" + 
    "<h1>" +  dato_1.name + "</h1>" + "<h2>" + dato_1.lastname +"</h2>" + "<h2>" + dato_1.dni +"</h2>"+
    "</div>";
    html += s;
    }
  }
    document.getElementById('mostrar3').innerHTML=html;
  }
  this.listar= function(){
  var html = "";
  for (var i =0; i < arreglo.length; i++) {
    var dato_1 = arreglo[i];
    if (arreglo[i]!==undefined){
    var s = "<div>" + 
    "<h1>" +  dato_1.name + "</h1>" + "<h2>" + dato_1.lastname +"</h2>" + "<h2>" + dato_1.dni +"</h2>"+
    "</div>";
    html += s;
  }
 }
   document.getElementById('mostrar2').innerHTML=html;
  }
  this.cancelar=function(){
   var num = parseInt (mostrar.textContent);
   var numeroAsiento = parseInt (mostrar.textContent);
   var obj = arreglo[num-1];
   if (obj !== undefined) {
         document.getElementById("name").value = "";
         document.getElementById("lastname").value = "";
         document.getElementById("dni").value = "";
         celdaActual.style.backgroundColor = 'transparent';
         arreglo=[];
    }
  }