
import styles from "./styles.module.css"

const Title = ({title})=>{

    return(
        <div className={styles.title}> 
            <h4>{title}</h4>
        </div>
    )

}

export default Title;