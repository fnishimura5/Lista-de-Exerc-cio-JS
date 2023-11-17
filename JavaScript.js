function contarItensPorTipo(hotifrutis) {
    // Inicializa contadores para cada tipo
    let frutas = 0;
    let legumes = 0;
    let verduras = 0;
  
    // Itera sobre a lista de hotifrutis
    for (let i = 0; i < hotifrutis.length; i++) {
      const hotifruti = hotifrutis[i];
  
      // Verifica a qual tipo pertence e incrementa o contador correspondente
      if (["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"].includes(hotifruti)) {
        frutas++;
      } else if (["cenoura", "batata", "brócolis", "abóbora", "tomate", "alho-poró"].includes(hotifruti)) {
        legumes++;
      } else if (["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"].includes(hotifruti)) {
        verduras++;
      }
    }
  
    // Retorna um objeto com o número de itens de cada tipo
    return {
      frutas: frutas,
      legumes: legumes,
      verduras: verduras
    };
  }
  
  // Exemplo de uso
  const hotifrutis = [
    "banana", "maçã", "abacaxi", "melancia", "laranja", "limão",
    "cenoura", "batata", "brócolis", "abóbora", "tomate", "alho-poró",
    "alface", "espinafre", "rúcula", "couve", "agrião", "acelga"
  ];
  
  const resultado = contarItensPorTipo(hotifrutis);
  console.log(resultado);
  