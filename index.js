const prompt = require('prompt-sync')({sigint: true});

const {adicionar, listar, editar, excluir} = require('./modulo.js')

while (true) {
    console.log(`
    1. Adicionar um novo livro
    2. Listar todos os livros
    3. Atualizar um livro
    4. Excluir um livro
    0. Sair
    `);

    let opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
        case '1':
            adicionar();
            break;
        case '2':
            listar();
            break;
        case '3':
            editar();
            break;
        case '4':
            excluir();
            break;
        case '0':
            console.log('Saindo do sistema. Até logo!');
            process.exit();
        default:
            console.log('Opção inválida, digite uma opção válida!');
    }
}