const data = require('./data.json');

export const getFirstSelectItens = () => {
  const newData = {
    ...data
  }
  return newData.map(product => product.name)
}

export const getSecondSelectItens = (firstSelectValue) => {
  const product = data.find(product => product.name === firstSelectValue)
  if (!product) {
    throw new Error(`Product ${firstSelectValue} not found`)
  }

  const { combinations } = product;
  return combinations.map(combination => combination.name)
}

export const combineWith = (a, b) => {
  const productA = data.find(product => product.name === a)
  if (!productA) {
    throw new Error(`Product ${a} not found`)
  }

  const { combinations } = productA;
  const combination = combinations.find(combination => combination.name === b)

  if (combination) {
    return combination;
  }

  return {
    name: b,
    dangerous: false,
    description: 'Não há indicação de que a mistura seja perigosa'
  }
}
