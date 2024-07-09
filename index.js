const prompt = require('prompt-sync')({sigint: true});
const {array, adicionar, listar, editar, excluir, sair} = require('./modulo.js')

array

while (true) {
    console.log(`
    1. Adicionar um novo livro
    2. Listar todos os livros
    3. Atualizar um livro
    4. Excluir um livro
    0. Sair
    `);

    let opcao = prompt('Escolha uma opção: ');

    adicionar
    listar
    editar
    excluir
    sair

}