import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer'

import { animateScroll as scroll } from 'react-scroll';
import { combineWith, getTitlePerType } from '../../utils/MixturesManager'
import './style.css';
import ProductSelector from './components/ProductSelector';
import { Result } from './components/Result';

function Main() {

  const [firstSelected, setFirstSelected] = useState(null)
  const [secondSelected, setSecondSelected] = useState(null)

  const [result, setResult] = useState(null)

  const setScopeProduct = (product) => {
    setFirstSelected(null)
    setSecondSelected(null)
    setResult(null)
    setFirstSelected(product)
  }

  const combineItens = () => {
    if (!firstSelected || !secondSelected)
      return;

    const data = combineWith(firstSelected, secondSelected)
    scroll.scrollToBottom({ smooth: true });
    setResult(data)
  }

  return (
    <div>
      <Header />
      <main>
        <div className='main-container'>

          <div className='title-container'>
            <h1>Posso Misturar?</h1>
            <div>
              <p>~ Descubra se o elemento que deseja misturar pode causar alguma reação indesejada! ~</p>
              <p class="alert">(ALGUNS PRODUTOS/MEDICAMENTOS POSSUEM A MESMA IMAGEM POIS PARTICIPAM DA MESMA CLASSE)</p>
            </div>

          </div>

          <div className="products-container">
            <ProductSelector
              selected={firstSelected}
              selectProduct={setScopeProduct}
              isFirst
            />

            <div>
              <p>COM</p>
            </div>

            <ProductSelector
              selected={secondSelected}
              firstSelected={firstSelected}
              selectProduct={setSecondSelected}
            />
          </div>

          <button
            className='combine-button'
            onClick={combineItens}
            disabled={!firstSelected || !secondSelected}
          >
            {firstSelected && secondSelected ? "COMBINAR" : "Selecione dois produtos!"}
          </button>

          {
            result && (
              <Result result={result} title={getTitlePerType(result.type)} />
            )
          }

        </div>
      </main >
      <Footer />
    </div>
  )
}

export default Main;