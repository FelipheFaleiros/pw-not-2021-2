// Vetor
let carros = ["Celta", "Uno", "Gol"]

// Desestruturação total do vetor
let [a, b, c] = carros

console.log(a)
console.log(b)
console.log(c)

// Desestruturação parcial
let [m, n] = carros //pegara os valores em ordem nesse caso celta e uno 

console.log("-------------------")

console.log(m)
console.log(n)

let [x, , z] = carros //pegara os valores pulando o do meio nesse caso o uno 

console.log(x)
console.log(z)
console.log(carros)

let [, i, j] = carros //pulara o primeiro no caso o celta
console.log(i)
console.log(j)

// Objeto 
let veiculo = {
    marca:"Volkswagen",
    modelo:"Fusca",
    cor:"Preto",
    ano: 1969
}
 
// Desestruturação total do um obj
// 1ª regra: as variáveis devem ter o mesmo nome das propriedades
// 2ª regra: a ordem não importa

let {cor, modelo, ano, marca} = veiculo

console.log("-------------------")

console.log(marca)
console.log(modelo)
console.log(cor)
console.log(ano)

// Para fazer a desestruturação parcial de obj, basta criar
// variáveis correspondente apenas às propriedades de interesse.

