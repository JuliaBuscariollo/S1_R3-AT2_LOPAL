const multiploCinco = parseFloat(prompt("Digite um número:"));

// Verifica se o valor digitado é um número válido
if (isNaN(multiploCinco)) {
    alert("Erro: Você não digitou um número válido!");
} else {
    // Verifica se o número é múltiplo de 5
    if (multiploCinco % 5 === 0) {
        alert("O número " + multiploCinco + " é múltiplo de cinco!");
    } else {
        alert("O número " + multiploCinco + " não é múltiplo de cinco.");
    }
}