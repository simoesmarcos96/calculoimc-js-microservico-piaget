const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    const imc = peso / (altura * altura);

    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    alert(
        "Seu IMC é: " + imc.toFixed(2) +
        "\nClassificação: " + classificacao
    );
});