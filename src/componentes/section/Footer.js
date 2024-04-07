import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'
import ButtonB from '../elementos/ButtonB'

function Footer() {
    return (
        <div className={styles.footer}>
             <ButtonB sizeW='350px' sizeH='50px' text='Ver repositório Completo' link='https://github.com/GabrielD1996' />
            <ul>
                <li><a target="_blank" href="https://www.instagram.com"><FaInstagram size={30} /></a></li>
                <li><a target="_blank" href="https://github.com/GabrielD1996"><FaGithub size={30} /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/gabriel-domingues-5b987b251/"><FaLinkedin size={30} /></a></li>
            </ul>
            <h3>
                gabrieldn1996@gmail.com
            </h3>
            <p>
                Gabriel Domingues © 2024
            </p>
        </div>
    )
}

export default Footer