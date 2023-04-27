import { useState } from 'react';

import Header from '../../components/pages/Header';
import Footer from '../../components/pages/Footer'

import { combineWith } from '../../data/MixturesManager'
import './style.css';
import ProductSelector from '../../components/ProductSelector';

console.log(combineWith("Alvejante", "Vinagre"));

function Main() {

  const [firstSelected, setFirstSelected] = useState(null)

  console.log(firstSelected)

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
            <ProductSelector firstSelected={firstSelected} selectProduct={setFirstSelected} isFirst />
            <p>COM</p>
            <ProductSelector />
          </div>

          <button className='combineButton'>
            COMBINAR
          </button>

          <div className='resultsContainer'>

          </div>
        </div>
      </main >
      <Footer />
    </>
  )
}

export default Main;