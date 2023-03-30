import styles from"./Usuario.module.css"

function Usuario({nome, idade, cargo, salario}){
    return(
        <div className={styles.divUser}>
            <img alt="foto" className={styles.foto}src="https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg"></img>
           <p>{nome}</p> 
           <p>{idade}</p> 
           <p>{cargo}</p> 
           <p>{salario}</p> 
        </div>
    )
}

export default Usuario