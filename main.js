let confirmacion = true;

while (confirmacion == true) {
    let inetSpeed = prompt("Cual es la velocidad de su servicio de internet? (mb)");

    let tiempo = "";

    let unidadPeso = confirm("El archivo que desea descargar pesa más de 1gb?");

    if (unidadPeso == true) {
        let peso = prompt("Cuanto pesa el archivo que desea descargar? (gb)");

        tiempo = parseInt((peso * 1000) / (inetSpeed * 10));

        if (tiempo < 60 && tiempo > 1) {

            alert("tardaría en descargarse " + Math.round(tiempo) + " minutos");
        }
        if (tiempo <= 1) {

            tiempo = parseInt(tiempo * 60);
            alert("tardaría en descargarse " + Math.round(tiempo) + " segundos");
        }
        else {

            tiempo = parseInt(tiempo / 60);

            if (Math.round(tiempo) < 2) {
                alert("tardaría en descargarse aproximadamente " + Math.round(tiempo) + " hora");
            } else {
                alert("tardaría en descargarse aproximadamente " + Math.round(tiempo) + " horas");
            }

        }

    }
    else {
        let pesoMegas = prompt("Cuanto pesa el archivo que desea descargar? (mb)");


        tiempo = parseInt(pesoMegas / (inetSpeed * 10));

        if (tiempo < 60 && tiempo > 1) {

            alert("tardaría en descargarse " + Math.round(tiempo) + " minutos");
        }
        if (tiempo <= 1) {

            tiempo = parseInt(tiempo * 60);
            alert("tardaría en descargarse " + Math.round(tiempo) + " segundos");
        }
        else {

            tiempo = parseInt(tiempo / 60);

            if (Math.round(tiempo) < 2) {
                alert("tardaría en descargarse aproximadamente " + Math.round(tiempo) + " hora");
            } else {
                alert("tardaría en descargarse aproximadamente " + Math.round(tiempo) + " hora/s");
            }

        }

    }

    confirmacion = confirm("¿Desea ejecutar el programa nuevamente?")

}
