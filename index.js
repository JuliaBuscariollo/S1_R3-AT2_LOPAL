 //A constante abaixo armazenará o número digitado pelo usuario
const numeroPar = parseFloat(prompt("digite um número:"));

// Verifica se o valor digitado é um número válido
if (isNaN(numeroPar)) {
    alert("Erro: Você não digitou um número válido!");
} else {
    if (numeroPar % 2 === 0) {
        // Se o numero tiver o resto igual a 0, a resposta será par
        alert("Seu número é par");

    } else {
        // Se o numero não tiver resto de 0 em uma divisão, a resposta será impar
        alert("Erro: seu número é impar");
    }
}