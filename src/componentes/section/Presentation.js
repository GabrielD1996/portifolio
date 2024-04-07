import styles from './Presentation.module.css'
import ButtonA from '../elementos/ButtonA'
function Presentation(){
    return(
        <div id="presentation" className={styles.Presentation}>
           <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
           <h1>Olá, eu sou Gabriel Domingues</h1>
           <p>Sou apaixonado por buscar maneiras criativas para solucionar <br />
            os problema do dia a dia, estou empenhado em transformar minha <br />
            paixão em uma carreira de sucesso como Desenvolvedor Web. <br />
            Criando uma base sólida com os estudos na escola DNC com a <br />
            formação em tecnologia , estou pronto para mergulhar de cabeça <br />
            no universo da programação.</p>
            <ButtonA text='Conecte-se comigo!!' link='https://github.com/GabrielD1996'/>
            
           
        </div>
    )
}

export default Presentation