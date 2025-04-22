// Solicita os dois números ao usuário
let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

// Definindo o intervalo de números (menor até o maior)
let inicio;
let fim;

if (numero1 < numero2) {
  inicio = numero1;
  fim = numero2;
} else {
  inicio = numero2;
  fim = numero1;
}

// Exibe os números pares no intervalo
let numerosPares = "";
for (let i = inicio; i <= fim; i++) {
  if (i % 2 === 0) {
    numerosPares += i + " "; // Concatena os números pares em uma string
  }
}

// Exibe os números pares encontrados
if (numerosPares) {
  alert(`Os números pares entre ${inicio} e ${fim} são: ${numerosPares}`);
} else {
  alert(`Não há números pares no intervalo entre ${inicio} e ${fim}.`);
}