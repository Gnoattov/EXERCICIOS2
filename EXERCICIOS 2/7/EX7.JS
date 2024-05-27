document.getElementById('comparacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    
    let mensagem = '';

    if (numero1 > numero2) {
        mensagem = 'O primeiro número é maior que o segundo.';
    } else if (numero1 === numero2) {
        mensagem = 'O primeiro número é igual ao segundo.';
    } else {
        mensagem = 'O primeiro número é menor que o segundo.';
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
});
