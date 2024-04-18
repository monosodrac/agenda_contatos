const form = document.querySelector('.form-contatos');
const nomesCad = [];
const telsCad = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const nome = document.querySelector('#nome-cadastro');
    let tel = document.querySelector('#telefone-cadastro');

    if (nomesCad.includes(nome.value)) {
            alert(`O nome: ${nome.value} já foi inserido`); 
    } else if (telsCad.includes(tel.value)) {
        alert(`O número: ${tel.value} já foi inserido`);
    } else {
        nomesCad.push(nome.value);
        telsCad.push(tel.value);

        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${tel.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    }

    nome.value = '';
    tel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}