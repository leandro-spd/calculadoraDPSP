function calcularPreco() {
    // Obtém o valor do preço do medicamento
    const preco = parseFloat(document.getElementById('preco').value);
    
    // Obtém o valor do desconto em porcentagem
    const desconto = parseFloat(document.getElementById('desconto').value);
    
    // Calcula o valor do desconto
    const valorDesconto = preco * (desconto / 100);
    
    // Calcula o preço final com desconto
    const precoFinal = preco - valorDesconto;
    
    // Exibe o resultado na tela
    document.getElementById('resultado').innerHTML = `Preço final com desconto: R$ ${precoFinal.toFixed(2)}`;
  }
  