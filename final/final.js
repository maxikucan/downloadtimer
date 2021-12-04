// resultado.value += tiempo;

const procesar = () => {

    const inetSpeed = document.getElementById("velocidad").value;

    let tiempo = 0;

    const peso = document.getElementById("peso").value
    const unidadPeso = document.getElementById("checkbox").checked
    let resultado = document.getElementById("resultado")
    let final = "";

    if (resultado.value.length > 0) resultado.value = null  // BORRA RESULTADO ANTERIOR.


        if (unidadPeso == true) {

            tiempo = parseInt((peso * 1000) / (inetSpeed * 10));

            if (tiempo < 60 && tiempo > 1) {

                final = (Math.round(tiempo)) + " minutos aproximadamente";

                return resultado.value += final;
            }
            if (tiempo <= 1) {

                tiempo = parseInt(tiempo * 60);

                final = (Math.round(tiempo)) + " segundos aproximadamente";
                return resultado.value += final;
            }
            else {

                tiempo = parseInt(tiempo / 60);

                if (Math.round(tiempo) < 2) {

                    final = (Math.round(tiempo)) + " hora aproximadamente ";
                    return resultado.value += final;
                } else {

                    final = (Math.round(tiempo)) + " horas aproximadamente";
                    return resultado.value += final;
                }

            }

        }
        else {

            tiempo = parseInt(peso / (inetSpeed * 10));

            if (tiempo < 60 && tiempo > 1) {
                final = (Math.round(tiempo)) + " minutos aproximadamente";
                return resultado.value += final;

            }
            if (tiempo <= 1) {

                tiempo = parseInt(tiempo * 60);
                final = (Math.round(tiempo)) + " segundos aproximadamente";
                return resultado.value += final;

            }
            else {

                tiempo = parseInt(tiempo / 60);

                if (Math.round(tiempo) < 2) {
                    final = (Math.round(tiempo)) + " hora aproximadamente";
                    return resultado.value += final;

                } else {
                    final = (Math.round(tiempo)) + " horas aproximadamente";
                    return resultado.value += final;
                }

            }

        }
   
}