document.getElementById('calculadoraForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const multiplicacao = n1 * n2;
    const divisao = n1 / n2;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p>Soma: ${soma}</p>
        <p>Subtração: ${subtracao}</p>
        <p>Multiplicação: ${multiplicacao}</p>
        <p>Divisão: ${divisao}</p>
    `;
});
