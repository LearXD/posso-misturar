import { useState } from 'react';

import Header from '../../components/pages/Header';
import Footer from '../../components/pages/Footer'

import { animateScroll as scroll } from 'react-scroll';
import { combineWith, getTitlePerType } from '../../data/MixturesManager'
import './style.css';
import ProductSelector from '../../components/ProductSelector';

function Main() {

  const [firstSelected, setFirstSelected] = useState(null)
  const [secondSelected, setSecondSelected] = useState(null)

  const [result, setResult] = useState(null)

  const setScopeProduct = (product) => {
    setFirstSelected(null)
    setFirstSelected(product)
    setSecondSelected(null)
    setResult(null)
  }

  const combineItens = () => {
    if (!firstSelected || !secondSelected)
      return;

    const data = combineWith(firstSelected, secondSelected)
    // scroll to end
    scroll.scrollToBottom({
      "smooth": true
    });

    setResult(data)
  }

  return (
    <>
      <Header />
      <main>
        <div className='mainContainer'>
          <div className='titleContainer'>
            <h1>Posso Misturar?</h1>
            <p>"Um site para você descobrir se pode misturar certos produtos"</p>
          </div>

          <div className="productsContainer">

            <ProductSelector
              selected={firstSelected}
              selectProduct={setScopeProduct}
              isFirst
            />

            <p>COM</p>

            <ProductSelector
              selected={secondSelected}
              firstSelected={firstSelected}
              selectProduct={setSecondSelected}
            />
          </div>

          <button onClick={combineItens} disabled={!firstSelected || !secondSelected} className='combineButton'>
            {firstSelected && secondSelected ? "COMBINAR" : "Selecione dois produtos!"}
          </button>

          <div className='resultsContainer'>

          </div>

          {
            result && (
              <div className='resultContainer'>
                <h1>{getTitlePerType(result.type)}</h1>
                <p>{result.message}</p>
              </div>
            )
          }
        </div>
      </main >
      <Footer />
    </>
  )
}

export default Main;