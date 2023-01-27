
const nome = prompt("Qual é o seu nome? ");
const idade = prompt("Qual é a sua idade? ");
const linguagem = prompt("Qual linguagem de programação você está estudando? ");

alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + " ! ");

const num = prompt("Você gosta de estudar " + linguagem + " ? Responda com o número 1 para SIM ou 2 para NÃO. ");

if (num == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso. ");
}else if (num == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens? ");
}else{
    alert("Opção inválida. ")
}



