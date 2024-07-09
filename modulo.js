let array = function(){
    let bilioteca = [];
    let genero = [];
}

let adicionar = function(){

    if(opcao === '1') {
        let nome = prompt('Nome do livro: ');
        let autor = prompt('Autor do livro: ');
        let quantidade = prompt('Tamanho do livro (quant. pág.): ');
            console.log(`Escolha o gênero: 

            1. Romance
            2. Aventura
            3. Drama
            4. Crônica
            5. Conto
            6. Poema
            `);
            genero = prompt('Escolha uma opção: ')

            if(genero === '1'){
                genero = 'Romance'
                biblioteca.push({ nome, autor, quantidade, genero });
                console.log('Livro adicionado com sucesso!', biblioteca);
            } else if (genero === '2'){
                genero = 'Aventura'
                biblioteca.push({ nome, autor, quantidade, genero });
                console.log('Livro adicionado com sucesso!', biblioteca);
            } else if (genero === '3'){
                genero = 'Drama'
                biblioteca.push({ nome, autor, quantidade, genero });
                console.log('Livro adicionado com sucesso!', biblioteca);
            } else if (genero === '4'){
                genero = 'Crônica'
                biblioteca.push({ nome, autor, quantidade, genero });
                console.log('Livro adicionado com sucesso!', biblioteca);
            } else if (genero === '5'){
                genero = 'Conto'
                biblioteca.push({ nome, autor, quantidade, genero });
                console.log('Livro adicionado com sucesso!', biblioteca);
            } else if (genero === '6'){
                genero = 'Poema'
                biblioteca.push({ nome, autor, quantidade, genero });
                console.log('Livro adicionado com sucesso!', biblioteca);
            }
    }
}

let listar = function(){
    if (opcao === '2') {
        if (biblioteca.length === 0) {
            console.log('Nenhuma livro cadastrado.');
        } else {
            biblioteca.forEach((biblioteca, index) => {
                console.log(
                    `${index + 1}. Livro: ${biblioteca.nome} - Autor: ${biblioteca.autor} - Tamanho: ${biblioteca.quantidade} pág. - Gênero: ${biblioteca.genero}`
                );
            });
        }
    } else if (opcao === '0') {
        console.log('Saindo do sistema. Até logo!');
        process.exit();
    }
}

let editar = function(){
    if (opcao === '3') {
        if (biblioteca.lenght === 0) {
            console.log('Nenhum livro cadastrado.');
        } else {
        biblioteca.forEach((biblioteca, index) => {
            console.log(
                `${index + 1}. Livro: ${biblioteca.nome} - Autor: ${biblioteca.autor} - Tamanho: ${biblioteca.quantidade} - Gênero: ${biblioteca.genero}`
            );
        });
        let editar = prompt('Qual livro deseja editar? ');
        index = editar-1;
        let dados = prompt('Você deseja editar algum dado? ');
            if(dados == 'sim'){
            console.log(`

            Qual dado você deseja editar?
            1 - Livro.
            2 - Autor.
            3 - Tamanho do livro (quant. pág.).
            4 - Gênero.
            0 - Sair.

            `);

            let edit_dados = prompt('Opção: ');

            if(edit_dados === '1') {
                let novo_nome = prompt('Qual é o nome do livro? ');
                biblioteca[index].nome = novo_nome;
            } else if (edit_dados === '2') {
                let novo_autor = prompt('Qual é o nome do autor? ');
                biblioteca[index].autor = novo_autor;
            } else if (edit_dados === '3') {
                let novo_tamanho = prompt('Qual é o tamanho (quant. pág.)? ')
                biblioteca[index].quantidade = novo_tamanho;
            } else if (edit_dados === '4') {
                console.log(`Escolha o gênero: 

                    1. Romance
                    2. Aventura
                    3. Drama
                    4. Crônica
                    5. Conto
                    6. Poema
                    `);
                    novo_genero = prompt('Escolha uma opção: ')

                if(novo_genero === '1'){
                    novo_genero = 'Romance';
                } else if (novo_genero === '2'){
                    novo_genero = 'Aventura';
                } else if (novo_genero === '3'){
                    novo_genero = 'Drama';
                } else if (novo_genero === '4'){
                    novo_genero = 'Crônica';
                } else if (novo_genero === '5'){
                    novo_genero = 'Conto';
                } else if (novo_genero === '6'){
                    novo_genero = 'Poema';
                }
                biblioteca[index].genero = novo_genero;

            } else if ( edit_dados === '0'){
                console.log('Até logo!')
                process.exit();
            }
            }else if (dados == 'nao') {
                console.log('Até logo!');
                process.exit();
            }
        }
    }
}

let excluir = function(){
    if (opcao === '4') {
        if (biblioteca.length === 0) {
            console.log('Nenhuma livro cadastrado.');;
        } else {
            biblioteca.forEach((biblioteca, index) => {
                console.log(
                    `${index + 1}. Livro: ${biblioteca.nome} - Autor: ${biblioteca.autor} - Tamanho: ${biblioteca.genero}`
                );
            });
        } 
        
        let cancelar = prompt('Qual livro deseja excluir? ');
        if(cancelar === '0'){
            console.log('\n Não livro n.0');
        } else if (cancelar > biblioteca.length){
            console.log('\n Digite um livro valido!');
        } else {
        index = cancelar - 1;
        biblioteca.splice(index, 1);
        console.log('\n Entrada do livro Cancelado!');
        } 
    }
}

let sair = function(){
    if (opcao === '0') {
        console.log('Até logo!');
        process.exit();
    } else {
        console.log('Opção invalida, digite uma opção valida!');
    }
}

module.exports = {
array, adicionar, listar, editar, excluir, sair
}