// A constante abaixo armazenará a idade digitada pelo usuário
const idade = parseFloat(prompt("Qual é a sua idade?"));

// Verifica se o valor digitado é um número válido
if (isNaN(idade)) {
    alert("Erro: Você não digitou um número válido!");
} else {
    if (idade >= 18) {
        // Se a idade for maior ou igual a 18, é maior de idade
        alert("Você é maior de idade!");
    } else if (idade >= 0) {
        // Se a idade for entre 0 e 17, é menor de idade
        alert("Você é menor de idade!");
    } else {
        // Se a idade for negativa, também é inválida
        alert("Erro: Idade não pode ser negativa!");
    }
}


