//creamos una carpeta para con id donde vamos a tener las distintas paginas 

import { useRouter } from "next/router"
const Desc = () =>{
    const router = useRouter()
    console.log({router})
    return(
        <div>
            <p>Descripcion del pokemon</p>
        </div>
    )
}
export default Desc