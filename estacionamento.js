function Calcular() {
    let grande = document.getElementById("inputGrande").checked;
    let frequente = document.getElementById("inputFrequente").checked;
    let entrada = new Date(document.getElementById("inputEntrada").value);
    let saida = new Date(document.getElementById("inputSaida").value);

    let tempo = (saida - entrada) / (1000 * 60 * 60);
    document.getElementById("spanTempo").innerHTML = tempo.toFixed(2) + " horas";

    let valor = (tempo - 1) * 2.5 + 5;

    if (tempo == 24 || tempo > 24) {
        let diarias = Math.ceil(tempo / 24);
        valor = diarias * 60;
    }

    if (grande) {
        valor = valor + valor * 0.25;
    };

    if (frequente) {
        valor = valor - valor * 0.05;
    }

    document.getElementById("spanValor").innerHTML = "R$" + valor.toFixed(2);
}