import Styles from './Cards.module.css'
import ButtonB from '../elementos/ButtonB'
import { useState } from 'react'

function Cards({ img, title, description, tech, repo, site, }) {

    const [info, setInfo] = useState(false)

    function InfoOn() {
        setInfo(true)
    }

    function InfoOff() {
        setInfo(false)
    }

    return (
        <div onMouseLeave={InfoOff} className={Styles.card}>
            <a onMouseEnter={InfoOn} target="_blank" href={site}>
                <img src={img} alt="ErroIMG" />
            </a>
            {info === true &&(
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
                <ButtonB id='btnCards' text={'Acesse o repositório'} link={repo} />
            </section>
            )}
        </div>

    )
}
export default Cards