import { useEffect } from 'react';
import { getFirstSelectItens, getProductByName, getSecondSelectItens } from '../../data/MixturesManager';

import './style.css'
import { useState } from 'react';

function ProductSelector({
  selected,
  selectProduct,
  firstSelected = '',
  isFirst
}) {

  const [data, setData] = useState([])
  const handleSelect = (e) => {
    selectProduct && selectProduct(
      e.target.value === "Selecione" ? null : e.target.value
    )
  }

  useEffect(() => {
    (async () => {
      setData(isFirst ? await getFirstSelectItens() : (firstSelected && getSecondSelectItens(firstSelected)))
    })()
  }, [isFirst, firstSelected])

  return (
    <div className='productSelector'>
      <div className='a'>
        {selected ? (
          <>
            <img
              alt='Imagem do Produto'
              src={getProductByName(selected).image || 'https://via.placeholder.com/150'}
            />
            <p>{selected}</p>
          </>

        ) : (
          <p>Selecione um produto</p>
        )}

      </div>
      <div className='b'>
        <select
          value={!selected ? 'Selecione' : selected}
          disabled={(!isFirst && !data)}
          onChange={handleSelect}
          className='productSelect'
        >
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