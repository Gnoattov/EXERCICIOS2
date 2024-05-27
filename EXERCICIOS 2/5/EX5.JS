document.getElementById('idadeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const anoAtual = new Date().getFullYear();
    const anoNascimentoPessoa1 = parseInt(document.getElementById('pessoa1').value);
    const anoNascimentoPessoa2 = parseInt(document.getElementById('pessoa2').value);
    const anoNascimentoPessoa3 = parseInt(document.getElementById('pessoa3').value);
    
    const idadePessoa1 = anoAtual - anoNascimentoPessoa1;
    const idadePessoa2 = anoAtual - anoNascimentoPessoa2;
    const idadePessoa3 = anoAtual - anoNascimentoPessoa3;

    let maisVelha = '';
    let segundaMaisVelha = '';
    let terceiraMaisVelha = '';

    if (idadePessoa1 >= idadePessoa2 && idadePessoa1 >= idadePessoa3) {
        maisVelha = 'Pessoa 1,';
        if (idadePessoa2 >= idadePessoa3) {
            segundaMaisVelha = 'Pessoa 2';
            terceiraMaisVelha = 'Pessoa 3';
        } else {
            segundaMaisVelha = 'Pessoa 3';
            terceiraMaisVelha = 'Pessoa 2';
        }
    } else if (idadePessoa2 >= idadePessoa1 && idadePessoa2 >= idadePessoa3) {
        maisVelha = 'Pessoa 2,';
        if (idadePessoa1 >= idadePessoa3) {
            segundaMaisVelha = 'Pessoa 1';
            terceiraMaisVelha = 'Pessoa 3';
        } else {
            segundaMaisVelha = 'Pessoa 3';
            terceiraMaisVelha = 'Pessoa 1';
        }
    } else {
        maisVelha = 'Pessoa 3';
        if (idadePessoa1 >= idadePessoa2) {
            segundaMaisVelha = 'Pessoa 1';
            terceiraMaisVelha = 'Pessoa 2';
        } else {
            segundaMaisVelha = 'Pessoa 2';
            terceiraMaisVelha = 'Pessoa 1';
        }
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2> Idades:</h2>
        <p>Pessoa mais velha: ${maisVelha},  ${idadePessoa1} anos</p>
        <p>Segunda pessoa mais velha: ${segundaMaisVelha},  ${idadePessoa2} anos</p>
        <p>Terceira pessoa mais velha: ${terceiraMaisVelha},  ${idadePessoa3} anos</p>
    `;
});
