document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sabor1 = document.getElementById('sabor1').value;
    const sabor2 = document.getElementById('sabor2').value;
    const sabor3 = document.getElementById('sabor3').value;
    const sabor4 = document.getElementById('sabor4').value;
    const refrigerantes = parseInt(document.getElementById('refrigerantes').value);
    
    const precoPizza = 12;
    const precoRefrigerante = 7;
    
    const totalPizza = precoPizza * 4;
    const totalRefrigerantes = precoRefrigerante * refrigerantes;
    const totalPedido = totalPizza + totalRefrigerantes;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Detalhes do Pedido:</h2>
        <p>Sabores de Pizza:
            <ul>
                <li>${sabor1}</li>
                <li>${sabor2}</li>
                <li>${sabor3}</li>
                <li>${sabor4}</li>
            </ul>
        </p>
        <p>Total a Pagar: R$ ${totalPedido.toFixed(2)}</p>
    `;
});
