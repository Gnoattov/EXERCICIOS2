document.getElementById('metaVendasForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const valorVendido = parseFloat(document.getElementById('valorVendido').value);
    const meta = parseFloat(document.getElementById('meta').value);
    const metaMinima = parseFloat(document.getElementById('metaMinima').value);
    
    let mensagem = '';
    let percentualMeta = (valorVendido / meta) * 100;
    let percentualMetaMinima = (valorVendido / metaMinima) * 100;

    if (valorVendido >= meta) {
        mensagem = 'PARABÉNS! Você atingiu a meta.';
    } else if (valorVendido >= metaMinima) {
        mensagem = 'Você atingiu a meta mínima de vendas.';
    } else {
        mensagem = 'Você não atingiu nenhuma das metas de vendas.';
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p>${mensagem}</p>
        <p>Percentual de atingimento da meta: ${percentualMeta.toFixed(2)}%</p>
        <p>Percentual de atingimento da meta mínima: ${percentualMetaMinima.toFixed(2)}%</p>
    `;
});
