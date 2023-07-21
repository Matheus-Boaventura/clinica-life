import './styles.css'


export default function Topo () {
    return(
        <header>
            <div className="limitar-secao">
                
                <img src='assets/logo.png'/>
                

                <nav>
                <a className='link-topo' href='#sobre'>SOBRE</a>
                <a className='link-topo' href='#especialidades'>ESPECIALIDADES</a>
                <a className='link-topo' href='#contato'>CONTATO</a>
                </nav>

            </div>
        </header>
    )
}