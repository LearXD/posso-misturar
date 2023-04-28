const products = require('./products.json');
const mixtures = require('./mixtures.json');

export const getProductByName = (name) => {
  return products.find(product => product.name === name)
}

export const getTitlePerType = (type) => {
  const types = {
    "safe": "Pode Misturar!",
    "dangerous": "Não Pode Misturar!",
    "warning": "Pode Misturar! Porem..."
  };
  return types[type] ?? "Não há informações suficientes";
}

export const getFirstSelectItens = () => {
  return products.map(product => product.name)
}


export const getSecondSelectItens = (firstSelectValue) => {
  const data = getProductByName(firstSelectValue)
  if (!data) {
    return ['Nenhuma informação encontrada']
  }
  return data.mixtures.dangerous;
}

export const combineWith = (a, b) => {

  const data = mixtures.find(
    (mixture) => {
      return (mixture.products.indexOf(a) !== -1 && mixture.products.indexOf(b) !== -1)
    }
  )

  if (data) {
    return data;
  }

  return {
    type: "safe",
    products: [a, b],
    message: 'Não há indicação de que a mistura seja perigosa'
  }
}
