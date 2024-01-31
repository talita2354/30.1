promptSync = require('prompt-sync');
const prompt = promptSync();

// Array para armazenar livros disponíveis na biblioteca
let livrosDisponiveis = [
    { id: 1, titulo: "Aventuras de Sherlock Holmes", autor: "Arthur Conan Doyle" },
    { id: 2, titulo: "Orgulho e Preconceito", autor: "Jane Austen" },
    { id: 3, titulo: "1984", autor: "George Orwell" }
];

// Array para armazenar alunos matriculados
let alunosMatriculados = [
    { id: 101, nome: "João Silva", curso: "Engenharia" },
    { id: 102, nome: "Maria Oliveira", curso: "Ciência da Computação" },
    { id: 103, nome: "Carlos Santos", curso: "Arquitetura" }
];
console.log(livrosDisponiveis);
console.log(alunosMatriculados);

// Solicitar informações do usuário
let alunoId = parseInt(prompt("Digite o ID do aluno:"));
let livroId = parseInt(prompt("Digite o ID do livro que deseja pegar emprestado:"));

let alunoExiste = alunosMatriculados.some(aluno => aluno.id === alunoId);

if (alunoExiste) {
    // Realizar a verificação de empréstimo para cada livro
    switch (livroId) {
        case 1:
        case 2:
        case 3:
            console.log("Empréstimo feito com sucesso");
            break;
        default:
            console.log("Livro não encontrado");
    }
} else {
    console.log("Este aluno não existe");
}