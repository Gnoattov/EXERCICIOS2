document.getElementById('parImparForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numero = parseInt(document.getElementById('numero').value);
    
    let mensagem = '';

    if (numero % 2 === 0) {
        mensagem = 'O número é par.';
    } else {
        mensagem = 'O número é ímpar.';
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
});
