// let infoUsuario = {
//     nome:"Jucicleison",
//     nomeCompleto: "Jucicleison da Silva Souza",
//     grupo: "aluno",
//     senha: "123456"
// }
let usuario = "Jucicleison"
let nome = "Jucicleison da Silva Souza"
let grupo = "aluno"
let password = "123456"

let infoUsuario = {
    usuario:usuario,  //abreviação => usuario
    nomeCompleto: nome,
    grupo,              //usando abreviação
    senha: password
}

console.log(infoUsuario)

// Exibindo o conteúdo da variável "password" e "grupo" para fins de depuração 
console.log(password)
console.log(grupo)

// Exibindo o conteúdo da variável com a sua propriedade  
console.log({password})
console.log({grupo})
console.log({password, grupo}) //podem ser usado juntos tb
