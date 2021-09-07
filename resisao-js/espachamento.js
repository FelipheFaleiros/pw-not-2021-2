let minimo = Math.min(15, 7, -8, 14, 0, 9, 18)
let maximo = Math.max(15, 7, -8, 14, 0, 9, 18)

console.log({minimo, maximo})

let numeros =[15, 7, -8, 14, 0, 9, 18]


minimo = Math.min(numeros)
maximo = Math.max(numeros)

console.log({minimo, maximo}) //isso não da certo pois min e max estão esperando um lista de números solto e não um vetor
 

minimo = Math.min(...numeros) //"..."sintaxe de espalhamento 
maximo = Math.max(...numeros)

console.log({minimo, maximo})


let carro1 = {
    marca: "Chevrolet",
    modelo: "Opala",
    ano: 1983,
    cor: "Verde"
}

//Criando o obj carro2 a partir de carro
// let carro2 = carro1 //vai colocar dois nomes para o mesmo obj e não criar um novo FORMA ERRADA 

//Usando espalhamento para tirar uma cópia real de um obj
let carro2 = {...carro1}
carro2.modelo = "Chevette"
carro2.cor = "Bege"

console.log(carro1)
console.log(carro2)

let soma1 = somaTudo(12, 1, 6, 11, 4, 2, 10, 3, 5, 13, 5)
let soma2 = somaTudo(121, 103, 144, 153)

// A sintaxe de espalhamento também é passada para receber um número arbitrário dentro deu um único parâmetro.
// Dentro da função, esse parâmetro se comporta como um vetor.
// Esse argumento especial recebe o nome de ARGUMENTO DE RESTO.
function somaTudo(...nums){//independente de quantos numeros eu passar ira cair nessa função. nums corresponde a um vetor
    let res = 0
    for (let n of nums) res += n
    return res
}
console.log({soma1, soma2})


let resultado1 =  calcular('+', 10, 20, 30, 40, 50)
let resultado2 =  calcular('*', 10, 20, 30, 40, 50)

// Assinatura de uma função é representada pela quantidade tipo de seus argumentos e  pelo tipo do seu valor de retorno
// oper é um argumento obrigatório comum  e nums é o argumento de resto
function calcular(oper, ...nums){
    let res //acumulador
    switch(oper){
        case '+':
            res = 0
            for (let i of nums) res += i
            break
        case '*':
            res = 1
            for (let i of nums) res *= i
    }
    return res
}
console.log({resultado1, resultado2})

let legumes = ["batata", "cenoura", "abobora"]
let frutas = ["maçã", "banana", "laranja", "pera"]
let hortifruiti = [...legumes, ...frutas]

console.log({hortifruiti})

hortifruiti.sort((a,b) => { //por em ordem alfabética
    if (a == b) return 0
    else if (a > b) return 1 //define crescente ou decrescente 
    else return -1
})
console.log({hortifruiti})