//esta forma de campurar rutas dinamicas es con []
//para poder campurar el parametro de la url utilizamos useRouter
//optimizacion automaticas de paginas estaticas. la primera vez viene vacio no debemos usar isReady
//

import { useRouter } from "next/router"
import { useEffect,useState } from "react"

const ChanchitoDinamico = () =>{
    const router = useRouter()
    const [loaded,setLoaded] = useState(false)
    useEffect(()=>{
        if(router.isReady){
            setLoaded(true)
        }
    },[router.isReady])
    
    
    if(!loaded){
        return null 
    }
    console.log({router}, router.query.id)
    return(
        <div>
            <p>
                Chanchito Dinamico
            </p>
        </div>
    )
    
}

export default ChanchitoDinamico