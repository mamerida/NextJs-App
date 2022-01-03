import Link from 'next/link'
import Image from 'next/image'
//de esta manera se importa directamente la imagen 
import Coffee from '../public/coffee.png'

//esta es la forma trabajando importando la imagen 
//<Image src="/coffee.png" width={700} height={300} />


export default function Home() {
  return (
  <div>
    <Link href="/chanchitos">Ir a Chanchitos</Link>
    <p>Chanchito Feliz</p>
    {/* al cargar imagen o ruta o importando la imagen con src widht height obligatorias o layout='fill' uitiliza todo el ancho y alto disponible  /<nombre imagen> obligatorio*/}
    {/* al importante el componente le paso el objeto importado de la imagen  */}
    <Image width={700} height={300} src={Coffee}/>
  </div>
  )
}
