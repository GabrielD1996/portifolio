import Styles from './Cards.module.css'
import ButtonB from '../elementos/ButtonB'

function Cards({img, title, description, tech, repo,site, }) {
    return (
        <div  className={Styles.card}>
            <a target="_blank" href={site}>
            <img src={img} alt="ErroIMG" />
            </a>
            <section>
                <h3>
                    {title}
                </h3>
                <p>
                    <strong>Tecnologias: </strong> {tech}
                </p>
                <p>
                    {description}
                </p>
                <ButtonB id='btnCards' text={'Acesse o repositório'} link={repo}/>
            </section>
        </div>

    )
}
export default Cards