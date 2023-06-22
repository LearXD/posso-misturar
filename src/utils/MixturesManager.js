const products = require('../data/products.json');
const mixtures = require('../data/mixtures.json');

export const getProductByName = (name) => {
  return products.find(product => {
    return product.name === name || product.aliases.includes(name)
  })
}

export const getTitlePerType = (type) => {
  const types = {
    safe: "Pode Misturar!",
    dangerous: "Não Pode Misturar!",
    unrecommended: "Pode Misturar! Porém..."
  };
  return types[type] ?? "Não há informações suficientes";
}

export const getFirstSelectItens = async () => {
  const productNames = [];


  for await (let product of products) {
    productNames.push(product.name)
    for await (let alias of product.aliases) {
      productNames.push(alias)
    }
  }

  return productNames
}


export const getSecondSelectItens = (firstSelectValue) => {
  const data = getProductByName(firstSelectValue)

  if (!data) {
    return ['Nenhuma informação encontrada']
  }

  return mixtures
    .filter(mixture => mixture.products.includes(data.name))
    .map(mixture => {
      return mixture.products.find(product => product !== data.name)
    });
}

export const combineWith = (a, b) => {

  const unrecommended = {
    type: "unrecommended",
    products: [a, b],
    message: 'Não temos dados sobre se essa mistura é perigosa ou não, recomendamos pesquisar mais profundamente na internet'
  }

  const productA = getProductByName(a)
  const productB = getProductByName(b)

  if (!productA || !productB) {
    return unrecommended
  }

  const data = mixtures.find(
    (mixture) => {
      return (mixture.products.indexOf(productA.name) !== -1 && mixture.products.indexOf(productB.name) !== -1)
    }
  )

  if (data) {
    return data;
  }

  return unrecommended
}
