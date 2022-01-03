//esta forma de campurar rutas dinamicas es con []
//para poder campurar el parametro de la url utilizamos useRouter
//optimizacion automaticas de paginas estaticas. la primera vez viene vacio no debemos usar isReady
//

import useIsMounted from '../../hooks/useIsMounted'
import { useRouter } from 'next/router'


const ChanchitoDinamico = () =>{
    const isMounted = useIsMounted()
    const router = useRouter()

    if(!isMounted){
        return null 
    }

    return(
        <div>
            <p>
                Chanchito Dinamico
            </p>
        </div>
    )
    
}

export default ChanchitoDinamico