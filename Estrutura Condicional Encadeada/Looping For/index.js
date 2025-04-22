// Inicialização das variáveis
let soma = 0; // Armazena a soma das notas válidas
let i = 0; // Contador para o número de notas válidas inseridas

// Laço de repetição para obter as 5 notas
for (; i < 5; ) {
  // Solicita ao usuário que digite uma nota entre 0 e 10
  let nota = parseFloat(prompt(`Digite a nota ${i + 1} (entre 0 e 10):`));

  // Verifica se a nota é válida (número entre 0 e 10)
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    soma += nota; // Soma a nota válida à variável soma
    i++; // Avança o índice para a próxima nota
  } else {
    // Se a nota for inválida, exibe um alerta e repete a solicitação
    alert("Nota inválida. Tente novamente.");
  }
}

// Calcula a média das 5 notas inseridas
let media = soma / 5; // Divida a soma total pela quantidade de notas

// Exibe a média no formato com duas casas decimais
alert(`A média das notas é: ${media.toFixed(2)}`);