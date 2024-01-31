

function Botones({onSumar, onRestar, textoSumar, textoRestar}){
    return(
        <>
            <button onClick={onSumar}>{textoSumar}</button>
            <button onClick={onRestar}>{textoRestar}</button>
        </>
    )
}

export default Botones