//index raiz el resto de los archivos se vinculan al nombre 
//para poder navegar entre paginas

import Link from 'next/link'
const Chanchito = () =>{
    return(
        <div>
            <p>Chanchito Triste</p>
            <Link href="/"> Inicio</Link>
        </div>
    )
}

export default Chanchito