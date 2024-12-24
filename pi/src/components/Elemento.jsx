function Elemento(props) {
    
    return (
        <>
            <section className={props.classe}>
                <span>{props.n_atomico}</span>
                <h2>{props.simbolo}</h2>
                <p>{props.nome}</p>
                <p>{props.peso}</p>
            </section>
        </> 
    )
}

export default Elemento
