let nota = 7.3
let situacao

// if(nota >= 6){
//     situacao = "APROVADO"
// }
// else {
//     situacao = "REPROVADO"
// }

// Usar operador ternário
// condição 
situacao = nota >= 6 ? "APROVADO" : "REPROVADO"  

console.log(`Nota ${nota}, situação ${situacao}`)

let user = "guest"
// let user = "admin"

let msg = user === "admin" ? "Pode logar" : "Não pode logar"
console.log (msg)