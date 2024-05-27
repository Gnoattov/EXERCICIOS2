document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nota = parseFloat(document.getElementById('nota').value);
    
    let mensagem = '';

    if (nota >= 6) {
        mensagem = 'Aprovado';
    } else if (nota >= 4) {
        mensagem = 'Fazer prova substitutiva';
    } else {
        mensagem = 'Reprovado';
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
});
