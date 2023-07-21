import Topo from '../../componentes/Topo'
import Home from '../../componentes/Home'
import Sobre from '../../componentes/Sobre'
import Especialidades from '../../componentes/Especialidades'
import Contato from '../../componentes/Contato'
import Rodape from '../../componentes/Rodape'


export default function Conteudo() {
    return (
      <main>
        <Topo />
        <Home />
        <Sobre />
        <Especialidades />
        <Contato />
        <Rodape />
      </main>
    )
}