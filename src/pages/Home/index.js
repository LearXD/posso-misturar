import { FiFilter } from 'react-icons/fi'

import './styles.css'


export default function Home() {
  return (
    <div className="home">

      <header>
        <div className="logoContainer">
          <FiFilter className='icon' size={30} color='#FAFAFA' />
          <h1>Pode Misturar?</h1>
        </div>
      </header>
      <main>
        <div className="content">
          <h1>Procure um elemento químico pelo nome:</h1>
          <input type="text" placeholder="Digite o nome do elemento" />

          <div className="alphabet">
            {
              ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => {
                return <button key={letter} type="button">{letter}</button>
              })
            }

          </div>
          <button className='submitButton' type="submit">Buscar</button>

        </div>
      </main>
    </div>
  );
}