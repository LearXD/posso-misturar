import Header from './../../components/Header'
import Footer from './../../components/Footer'
import CardView from "./components/CardView";
import './style.css'

const About = function () {
  return (
    <div>
      <Header />
      <div className='about-container'>
        <div className='info-container'>
          <h1>Sobre o projeto!</h1>
          <h2>Projeto de Pesquisa: "Posso Misturar?"</h2>
          <p>Motivação: Devido a possíveis problemas e acidentes causados por algum descuido ao misturar elementos que reagem entre si. Os docentes e discentes do IFMG - Campus Avançado de Itabirito, exergaram a necessidade da criação de uma plataforma que pudesse organizar e facilitar o acesso de informação sobre misturas químicas.</p>
        </div>
        <div className="about-persons-container">
          <div className="persons-container">

            <CardView
              title="Adriano Lages dos Santos "
              description="Professor de Programação no IFMG de Itabirito, no curso técnico de Automação Industrial."
            />
            <CardView
              title="Miguel Silva Pinheiro"
              description="Estudante do IFMG de Itabirito, no curso técnico de Automação Industrial."
            />
            <CardView
              title="Tamyris Teixeira da Cunha"
              description="Professora de Química no IFMG de Itabirito, no curso técnico de Automação Industrial."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;