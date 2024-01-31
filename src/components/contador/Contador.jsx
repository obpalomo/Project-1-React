import { useState } from "react"
import Botones from "../botones/Botones"




function Contador(){
    const [contador, setContador] = useState(0)

    function sumar(){
        setContador(contador+1)
    }
    function restar(){
        setContador(contador-1)
    }
    return(
             <>
             <h5>{contador}</h5>
             <Botones 
             onSumar={sumar}
             onRestar={restar}
             textoRestar='RESTAR'
             textoSumar='SUMAR'
             ></Botones>
            </>
         )

}


export default Contador