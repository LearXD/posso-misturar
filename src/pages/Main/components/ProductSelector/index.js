import { useEffect } from 'react';
import { getFirstSelectItens, getProductByName, getSecondSelectItens } from '../../../../utils/MixturesManager';

import './style.css'
import { useState } from 'react';

function ProductSelector({
  selected,
  selectProduct,
  firstSelected = '',
  isFirst
}) {

  const [data, setData] = useState([])

  useEffect(() => {
    const handleSelectProduct = async function () {
      setData(isFirst ? await getFirstSelectItens() : (firstSelected && getSecondSelectItens(firstSelected)))
    }

    handleSelectProduct()
  }, [isFirst, firstSelected])

  const handleSelect = (e) => {
    selectProduct && selectProduct(
      e.target.value === "Nada Selecionado" ? null : e.target.value
    )
  }

  return (
    <div className='product-selector-container'>
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
          value={!selected ? 'Nada Selecionado' : selected}
          disabled={(!isFirst && !data)}
          onChange={handleSelect}
          className='productSelect'
        >
          <option key={0} value={null}>Nada Selecionado</option>
          {
            data ?
              data.map(
                (item, index) => (
                  <option key={index + 1} value={item}>{item}</option>
                )
              ) : (
                <option key={1} value='Nenhum'>Nenhum</option>
              )
          }
        </select>
      </div>
    </div>
  )
}

export default ProductSelector;