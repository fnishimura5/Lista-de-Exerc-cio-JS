function contarItensPorTipo(hotifrutis) {
   
    let frutas = 0;
    let legumes = 0;
    let verduras = 0;
  
    for (let i = 0; i < hotifrutis.length; i++) {
      const hotifruti = hotifrutis[i];
  
      
      if (["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"].includes(hotifruti)) {
        frutas++;
      } else if (["cenoura", "batata", "brócolis", "abóbora", "tomate", "alho-poró"].includes(hotifruti)) {
        legumes++;
      } else if (["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"].includes(hotifruti)) {
        verduras++;
      }
    }
  
    
    return {
      frutas: frutas,
      legumes: legumes,
      verduras: verduras
    };
  }
  
 
  const hotifrutis = [
    "banana", "maçã", "abacaxi", "melancia", "laranja", "limão",
    "cenoura", "batata", "brócolis", "abóbora", "tomate", "alho-poró",
    "alface", "espinafre", "rúcula", "couve", "agrião", "acelga"
  ];
  
  const resultado = contarItensPorTipo(hotifrutis);
  console.log(resultado);
  