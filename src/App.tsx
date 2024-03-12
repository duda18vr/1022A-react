import "./App.css"
import MeuComponente from "./componentes/MeuComponente"

function App() {
  let nome = "Duda"
  let sobrenome ="Rodrigues"
  return (
    <>
    <MeuComponente/>
    <p className= "meu-nome">Olá, eu sou a {nome} {sobrenome}</p>
    <p>Olá, eu sou aa {nome}  {sobrenome}</p>
    </>
  ) 
}
export default App
