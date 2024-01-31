
promptSync = require('prompt-sync');
const prompt = promptSync();
let alunos = [
    { id: 1, nome: "João", idade: 18 },
    { id: 2, nome: "Maria", idade: 20 },
    { id: 3, nome: "Carlos", idade: 19 }
];

let professores = [
    { id: 101, nome: "Professor Silva", disciplina: "Matemática" },
    { id: 102, nome: "Professora Oliveira", disciplina: "História" }
];

let aulas = [
    { id: 1, disciplina: "Matemática", horario: "08:00" },
    { id: 2, disciplina: "História", horario: "10:00" }
];

let cursos = [
    { id: 1, nome: "Curso de Matemática Avançada", disciplinas: ["Matemática", "Física"] },
    { id: 2, nome: "Curso de História Antiga", disciplinas: ["História", "Arqueologia"] }
];
 console.log(alunos);
 console.log(professores);
 console.log(aulas);
 console.log(cursos);


let alunoId = Number(prompt("Digite o ID do aluno:"));
let professorId =Number(prompt("Digite o ID do professor:"));
let aulaId = Number(prompt("Digite o ID da aula:"));
let cursoId = Number(prompt("Digite o ID do curso:"));
// é utilizado para buscar o primeiro elemento em um array que satisfaça uma determinada condição. No exemplo que forneci anteriormente, utilizei find() para encontrar objetos específicos com base nos IDs fornecidos pelo usuário.

console.log("Informações selecionadas:");
console.log("Aluno: ", alunos.find(aluno => aluno.id === alunoId));
console.log("Professor: ", professores.find(professor => professor.id === professorId));
console.log("Aula: ", aulas.find(aula => aula.id === aulaId));
console.log("Curso: ", cursos.find(curso => curso.id === cursoId));