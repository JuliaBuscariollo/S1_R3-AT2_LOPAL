//
const valorCompra = parseFloat(prompt("digite o valor da compra:"));

// Verifica se o valor digitado é um número válido
if (isNaN(valorCompra)) {
    alert("Erro: Você não digitou um número válido!");

} else {

        if (valorCompra<100) {
        // Se o numero não tiver resto de 0 em uma divisão, a resposta será impar
        alert (`sua compra não atingiu o valor minimo para ter direito á desconto, o valor da compra ficou em ${valorCompra}`)

        } else {

            const valorDesconto = valorCompra - (valorCompra * 0.10);
            alert(`o valor da sua compra iria ficar R$ ${valorCompra}, mas após a aplicação do desconto, o valor da compra será ${valorDesconto.toFixed(2)}!`)

            }

        } 
        