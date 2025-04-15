//a constante criada ira armazenar os numeros
const numero = parseFloatprompt("escreva um numero:")

if (isNaN(numero)) {
    alert("Erro: Você não digitou um número válido!");
} else {
    // verifica se o numero é maior ou igual a zero
    if (numero>=0){
        //se o numero for igual ou maior que zero, a resposta sera positivo
        alert("esse numero é positivo!")
    }else{
        // se o numero for menor que zero, a resposta sera negativa
        alert ("esse numero não é positivo!")
    }
}