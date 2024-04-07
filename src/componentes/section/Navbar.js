import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a target="_blank" href="https://www.instagram.com"><FaInstagram size={30}/></a></li>
                <li><a target="_blank" href="https://github.com/GabrielD1996"><FaGithub size={30}/></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/gabriel-domingues-5b987b251/"><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar