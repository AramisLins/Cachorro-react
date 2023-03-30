import HelloWord from "./HelloWorld"
//import Usuario from "./Usuario/Usuario"
import { useEffect, useState } from "react"
import Loader from "./loader/loader"
import loader from "./loader/loader"

function App() {
  //const [nome, setNome] = useState()
  const [imagem, setImagem] = useState()
  useEffect(() => {
    getImagem()
    //console.log('a pagina foi carregada')

  }, [])
  const getImagem = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random ")
    const data = await response.json()
    console.log(data.message)
    setImagem(data)

  }

  return (
    <div className="app">

   
      {/* <input type={"text"} onChange={ (e)=>setNome(e.target.value) } />
      <p>nome: {nome}</p>  */}
      {typeof (imagem) === 'undefined' ?
        <Loader></Loader>
        :
        <img src={imagem.message}></img>
      }

    </div>
  )

}

export default App
