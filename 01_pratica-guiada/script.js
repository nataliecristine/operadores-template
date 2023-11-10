
//pratica 1

const valorProduto = Number (prompt("valor do produto")
const percentualDesc = Number (prompt("valor percentual")

const valorDoDesconto = (valorProduto*percentualDesc)
                        (100 = 10) / 100

console.log("valor do desconto é de R$ " , valorDoDesconto); // 10

console.log("o valor final do produto com desconto é R$" , valorFinal);


//pratica 2

const altura = Number(prompt("informar sua altura"))
const pesoAtual = Number (prompt("informar seu peso atual")) 
const pesoAnterior = Number(prompt("informar seu peso anterior")) 

// prox passo é prox passo é calcular o iMC: peso / Altura ao quadrado - altura x altura formulaIMC = peso / altura * altura


const imcAtual = pesoAtual / (altura * altura)

const imcAnterior = pesoAnterior / (altura * altura)

// o IMC atual é maior ou igual ao anterior? o IMC atual é menor ou igual ao anterior? o IMC


console.log(" o IMC atual é maior ou igual ao anterior? " , imcAtual >= imcAnterior) ;

// o resultado da comparacao sera um booleano


// pratica 3

const anoNascUsuario = Number (prompt("insira o ano de nasc do usuario"))
const anoNascAcomp = Number (prompt("insira o ano de nascimento do acompanhante"))

const anoAtual =2023

const idadeUsuario = 2023 - anoNascUsuario
const idadeAcompanhante = anoAtual - anoNascAcomp 

console.log("usuario e acompanhante sao de maior?" , idadeUsuario >=18 && idadeAcompanhante >=18) ;

console.log ("usuario OU acompanhente sao de maior?" , idadeUsuario >=18 || idadeAcompanhante >=18 );

console.log ("usuario e acompanhante sao de menor?" !(idadeUsuario) >=18 && idadeAcompanhante >=18 ))


const todosDemaior = idadeUsuario >=18 && idadeAcompanhante >=18
const umDelesDeMaior = idadeUsuario >=18 || idadeAcompanhante >=18

console.log (" o usuario E o seu acompanhante tem maioridade?" , todosDemaior);

console.log("o usuario OU o seu acompanhante tem maioridade?" , umDelesDeMaior );

console.log ("ambos nao tem maioridade?" ! todosDemaior)



// 18-10 = false
// 20 - 22 = true
// 10 - 18 = false
