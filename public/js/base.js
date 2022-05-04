
const nome = "gabriel";
let nome2 = "camila";
let pessoa = {
    nome: "marcelo",
    idade: "22",
    proficao: "programador"
}

let nomes = ["gabriel", "camila", "Arthur"];

let pessoaslistvazia = [];

let pessoas = [
    {
        nome: "marcelo",
        idade: "22",
        proficao: "programador"
    },
    {
        nome: "camila",
        idade: "20",
        proficao: "designer"
    }
];

function alterarnome() {
    nome2 = "Dalva"; 
    console.log("valor alterado");
    console.log(nome2)

}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("valor alterado recebe um novo nome");
    console.log(nome2);
}

function imprimirpessoa(pessoa){
console.log("nome:");
console.log(pessoa.nome);

console.log("idade:");
console.log(pessoa.idade);

console.log("prficao:");
console.log(pessoa.proficao);
}

function adicionarpassoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirpessoas(){
    pessoas.forEach((item) => {
        console.log("nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idadde);

        console.log("prficao:");
        console.log(item.proficao);
    });
}

imprimirpessoas();

adicionarpassoa({
    nome: "pedros silva",
    idade: "28",
    proficao: "porteiro"
});

console.log(pessoas);
//imprimirpessoa(pessoa);

//imprimirpessoa({
//    nome: "camila",
//    idade: "20",
//    proficao: "designer"
//});

//recebeEalteraNome("joão");
//recebeEalteraNome("Marcos");



//alterarnome();
