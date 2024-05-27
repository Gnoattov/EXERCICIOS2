function calcular() {
    var dolarAtual = parseFloat(document.getElementById("dolar").value);

    if (isNaN(dolarAtual)) {
        alert("Por favor, insira um valor válido para a cotação do dólar.");
        return;
    }

    var porcentagens = [0.01, 0.02, 0.05, 0.10];
    var resultadosHTML = "<h2>Resultados:</h2>";

    porcentagens.forEach(function(porcentagem) {
        var novoValor = dolarAtual * (1 + porcentagem);
        resultadosHTML += "<p>Se a cotação do dólar subir " + (porcentagem * 100) + "%, o novo valor será: " + novoValor.toFixed(2) + "</p>";
    });

    document.getElementById("resultados").innerHTML = resultadosHTML;
}
