import Card from './components/card'
import './App.css'

function App() {

  return (
    <>
      <Card src={"/src/assets/Jinx_Arcane_6_Render.webp"}>
        <h3 className="card-title">This is JINX!</h3>
        <p className="card-text">Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx Jinx</p>
        <a href="https://arcane.fandom.com/wiki/Jinx" className="button">Jinx!</a>
      </Card>

      <Card src={false}>
        <h5 className="card-title">This is not Jinx</h5>
        <p className="card-text">Boring text</p>
        <a href="https://www.brade.zone/2008/09/13/boring/" className="button">not jinx</a>
      </Card>
    </>
  )
}

export default App
