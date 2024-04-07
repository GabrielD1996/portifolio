import Styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'
import typescript from '../../image/skills/typescript.svg'


function Skills(){
    return(
        <div id="skills" className={Styles.skill}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={react} alt="" />
                <img src={typescript} alt="" />
            </div>
        </div>
    )
}

export default Skills