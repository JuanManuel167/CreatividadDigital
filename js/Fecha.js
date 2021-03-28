function verFecha(){
    momentoActual = new Date();
    dia = momentoActual.getDate();
    mes = momentoActual.getMonth();
    año = momentoActual.getFullYear();

    Imprimible = dia + " : " + mes + " : " + año;

    //salida

    document.getElementById('verFecha').innerHTML = fechaImprimible;
}