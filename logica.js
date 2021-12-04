let inetSpeed = prompt("Cual es la velocidad de su servicio de internet? (mb)");

let peso = prompt("Cuanto pesa el archivo que desea descargar? (mb)");

let tiempo = "";


tiempo = parseInt(peso / (inetSpeed * 10));


alert("tardaría en descargarse " + tiempo + " minutos");