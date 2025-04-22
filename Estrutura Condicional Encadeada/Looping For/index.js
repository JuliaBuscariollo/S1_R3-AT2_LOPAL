// Solicita ao usuário que digite um número
const numero = parseInt(prompt("Digite um número:"));

// Verifica se o valor digitado é inválido (não numérico ou negativo)
if (isNaN(numero) || numero < 0) {
    alert("ERRO: Você digitou um caractere inválido.");
} else {
    let resultado = "";

    // números de 1 até o número digitado, separados por quebra de linha
    for (let i = 1; i <= numero; i++) {
        resultado += `${i}\n`;
    }

    // Exibe todos os números no intervalo de 1 até o número informado
    console.log(`Todos os números até ${numero} são:\n${resultado}`);
}alert("resultado"+resultado)