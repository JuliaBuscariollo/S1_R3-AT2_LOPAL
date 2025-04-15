//
const valorCompra = parseFloat(prompt("digite o valor da compra:"));

// Verifica se o valor digitado é um número válido
if (isNaN(valorCompra)) {
    alert("Erro: Você não digitou um número válido!");

} else {

        if (valorCompra<100) {
        // irá alertar caso a compra não tenha atingido o valor minimo
        alert (`sua compra não atingiu o valor minimo para ter direito á desconto, o valor da compra ficou em ${valorCompra}`)

        } else {

            const valorDesconto = valorCompra - (valorCompra * 0.10);
            //irá demonstrar o valor que ficara a conta após a aplicação do desconto
            alert(`o valor da sua compra iria ficar R$ ${valorCompra}, mas após a aplicação do desconto, o valor da compra será ${valorDesconto.toFixed(2)}!`)

            }

        } 
    