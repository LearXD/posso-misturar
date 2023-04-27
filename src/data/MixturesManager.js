const data = require('./data.json');

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
