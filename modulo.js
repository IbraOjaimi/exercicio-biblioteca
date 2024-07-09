const prompt = require('prompt-sync')({ sigint: true });

let biblioteca = [];

function adicionar() {
    let nome = prompt('Nome do livro: ');
    let autor = prompt('Autor do livro: ');
    let quantidade = prompt('Tamanho do livro (quant. pág.): ');

    console.log(`Escolha o gênero: 
    1. Romance
    2. Aventura
    3. Drama
    4. Crônica
    5. Conto
    6. Poema`);

    let generoOpcao = prompt('Escolha uma opção: ');
    let genero = ["Romance", "Aventura", "Drama", "Crônica", "Conto", "Poema"][generoOpcao - 1];

    if (genero) {
        biblioteca.push({ nome, autor, quantidade, genero });
        console.log('Livro adicionado com sucesso!', biblioteca);
    } else {
        console.log('Gênero inválido!');
    }
}

function listar() {
    if (biblioteca.length === 0) {
        console.log('Nenhum livro cadastrado.');
    } else {
        biblioteca.forEach((livro, index) => {
            console.log(`${index + 1}. Livro: ${livro.nome} - Autor: ${livro.autor} - Tamanho: ${livro.quantidade} pág. - Gênero: ${livro.genero}`);
        });
    }
}

function editar() {
    listar();
    let editar = parseInt(prompt('Qual livro deseja editar? ')) - 1;

    if (editar >= 0 && editar < biblioteca.length) {
        let livro = biblioteca[editar];

        console.log(`
        Qual dado você deseja editar?
        1 - Nome.
        2 - Autor.
        3 - Tamanho (quant. pág.).
        4 - Gênero.
        0 - Sair.`);

        let edit_dados = prompt('Opção: ');

        switch (edit_dados) {
            case '1':
                livro.nome = prompt('Qual é o novo nome do livro? ');
                break;
            case '2':
                livro.autor = prompt('Qual é o novo nome do autor? ');
                break;
            case '3':
                livro.quantidade = prompt('Qual é o novo tamanho (quant. pág.)? ');
                break;
            case '4':
                console.log(`Escolha o novo gênero: 
                1. Romance
                2. Aventura
                3. Drama
                4. Crônica
                5. Conto
                6. Poema`);

                let novo_generoOpcao = prompt('Escolha uma opção: ');
                livro.genero = ["Romance", "Aventura", "Drama", "Crônica", "Conto", "Poema"][novo_generoOpcao - 1];
                break;
            case '0':
                console.log('Saindo...');
                return;
            default:
                console.log('Opção inválida!');
        }
        console.log('Livro atualizado com sucesso!', livro);
    } else {
        console.log('Livro não encontrado!');
    }
}

function excluir() {
    listar();
    let cancelar = parseInt(prompt('Qual livro deseja excluir? ')) - 1;

    if (cancelar >= 0 && cancelar < biblioteca.length) {
        biblioteca.splice(cancelar, 1);
        console.log('Livro excluído com sucesso!');
    } else {
        console.log('Livro não encontrado!');
    }
}

module.exports = {
    adicionar,
    listar,
    editar,
    excluir
};
