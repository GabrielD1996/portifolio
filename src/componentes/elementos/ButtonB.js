import styles from './ButtonB.module.css'


function ButtonB({ text, link,sizeW, sizeH }) {
    return (
        <div>
            <a target="_blank" href={link}>
                <button style={{ width: sizeW, height:sizeH  }} className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}
export default ButtonB