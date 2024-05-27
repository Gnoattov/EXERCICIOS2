document.getElementById('divisaoTurmasForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numAlunos = parseInt(document.getElementById('numAlunos').value);
    const numTurmas = parseInt(document.getElementById('numTurmas').value);
    
    const pessoasPorTurma = Math.floor(numAlunos / numTurmas);
    const pessoasSemTurma = numAlunos % numTurmas;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p>Pessoas por turma: ${pessoasPorTurma}</p>
        <p>Pessoas sem turma: ${pessoasSemTurma}</p>
    `;
});
