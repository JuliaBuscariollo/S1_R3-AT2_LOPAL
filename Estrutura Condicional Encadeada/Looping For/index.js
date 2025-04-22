// Solicita ao usuário que digite um número
let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

// Verifica se o valor digitado é um número válido
if (isNaN(numero)) {
    alert("ERRO! Por favor, digite um número válido.");
} else {
    let tabuada = `Tabuada do ${numero}:\n\n`;

    // Gera a tabuada de 1 a 10 usando o for
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} * ${i} = ${numero * i}\n`;
    }

    // Exibe a tabuada
    alert(tabuada);
}