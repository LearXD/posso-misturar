import { getFirstSelectItens, getSecondSelectItens } from '../../data/MixturesManager';

import './style.css'


function ProductSelector({ selectProduct, firstSelected, isFirst }) {

  const handleSelect = (e) => {
    selectProduct && selectProduct(e.target.value)
  }

  const data = isFirst ? getFirstSelectItens() : (firstSelected && getSecondSelectItens(firstSelected ?? ''))

  return (
    <div className='productSelector'>
      <div className='a'>
        <p>
          Selecione algum produto
        </p>

      </div>
      <div className='b'>
        <select disabled={(!isFirst && !data)} onChange={handleSelect} className='productSelect'>
          <option key={0} value={null}>Selecione</option>
          {
            data ?
              data.map((item, index) => (
                <option key={index + 1} value={item}>{item}</option>
              )) : (
                <option key={1} value='Nenhum'>Nenhum</option>
              )
          }
        </select>
      </div>
    </div>
  )
}

export default ProductSelector;