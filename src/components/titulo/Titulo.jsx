import './Titulo.css'

function Titulo({color, tamFuente}){
    return(
        <h1 style={{color:color, fontSize:tamFuente}} className="titulo">Ejemplo React</h1>
    )
}


export default Titulo