document.getElementById('omeleteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numPessoas = parseInt(document.getElementById('numPessoas').value);
    
    const ovosTotal = numPessoas * 2;
    const queijoTotal = numPessoas * 50;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Quantidades necessárias:</h2>
        <p>${ovosTotal} ovos</p>
        <p>${queijoTotal}g de queijo</p>
    `;
});
