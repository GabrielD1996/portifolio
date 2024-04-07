import Styles from './Projects.module.css'
import Cards from '../elementos/Cards'
import primeiraPage from '../../image/Projects/primeiraPage.svg'
import desafioUm from '../../image/Projects/desafioUm.svg'
import desafioDois from '../../image/Projects/desafioDois.svg'
import portifolio from '../../image/Projects/portifolio.svg'



function Projects() {
    return (
        <div className={Styles.Projects} id="projects">
            
            <h1>Projetos</h1>
            <Cards img={primeiraPage} site='https://primeiro-projeto-luck.netlify.app' title='Landing Page DNC' tech='HTML,CSS,JS'
                description='Primeiro projeto pratico da DNC, inicio das praticas com programação.' 
                repo='https://github.com/GabrielD1996/projeto-landing-page' />
            <Cards img={desafioUm} site='https://primeiro-desafio-dnc.netlify.app' title='Desafio Um DNC' tech='HTML,CSS' description='Primeiro 
                projeto avaliativo feito no decorrer do curso, em busca de testar os conhecimentos basicos em html e css.' 
                repo='https://github.com/GabrielD1996/1-desafio-DNC'/>
            <Cards img={desafioDois} site='https://desafio2dnc.netlify.app' title='Desafio Dois DNC' tech='HTML,CSS,JS'
                description='Projeto feito para exercitar o uso de bibliotecas e consumo de APIs, no caso 
                foi utilizado o bootstrap para construção do front-end, e usadas duas APIs pra buscar o cep e a previsão.'
                repo='https://github.com/GabrielD1996/Desafio-2-Dnc' />
            <Cards img={portifolio} site='https://portifolio-steel-nine.vercel.app' title='Portifolio G.Domingues' tech='REACT,HTML,CSS,JS'
                description='Pagina construida para compreensão do uso do REACT, usando a montagem de componentes que deixam a construção 
                da pagina muito mais agil alem de facilitar adição de novos conteudos.'
                repo='https://github.com/GabrielD1996/portifolio' />
           
        </div>

    )
}

export default Projects