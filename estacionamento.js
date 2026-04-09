function Calcular() {
    let grande = document.getElementById("inputGrande").checked;
    let frequente = document.getElementById("inputFrequente").checked;
    let horas = parseInt(document.getElementById("inputHoras").value);
    let valor = 0;

    if (horas == 24) {
        valor = 60;
    } else {
        valor = ((horas - 1) * 2.5) + 5;
    }

    if (grande == true) {
        valor = valor + 25/100;
    }

    if (frequente == true) {
        valor = valor - 5/100;
    }

    document.getElementById("spanValor").innerHTML = "R$" + valor.toFixed(2);
}