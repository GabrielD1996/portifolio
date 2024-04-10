import styles from './Presentation.module.css'
import ButtonA from '../elementos/ButtonA'
import {useEffect, useState} from 'react'


function Presentation(){

    const [text,setText] = useState('');
    const toRotate = ['Gabriel Domingues','Estudante de tecnologia','aspirante a Desenvolvedor FullStack' ];
    const [loop,setLoop] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const period = 100;
    const [delta,setDelta] = useState(100)

    useEffect(()=>{
        let ticker= setInterval(()=>{
            toType()
        },delta)
        return()=> {clearInterval(ticker)}
    },[text])

    const toType = ()=>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)
        
        setText(updatedText)

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

        }else if( isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div id="presentation" className={styles.Presentation}>
           <h4><strong>Bem-vindo ao meu Portfólio</strong></h4> 
           <h1>Olá, eu sou {text}</h1>
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