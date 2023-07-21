
import './styles.css'
import { Link } from 'react-router-dom'

export default function Especialidades(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <div>
            <section id="especialidades" className="secao-especialidades limitar-secao">
                <div className="texto-especialidades">
                    <h3>Uma clínica de multiespecialidade</h3>
                    <p>Nossa clínica possui diversas especialidades. Como ortopedia, pediatra, geriatria, psicologia, fisioterapia e outros.</p>
                </div>

                <div className="box-especialidades">
                    <figure class="box-especialidade">
                    <img src="assets/ortopedia1.png" alt="Imagem de um ortopedista" title="Imagem de um ortopedista"/>
                    <figcaption>Ortopedia</figcaption>
                    </figure>

                    <figure className="box-especialidade">
                    <img src="assets/pediatra.png" alt="Imagem de uma pediatra" title="Imagem de uma pediatra"/>
                    <figcaption>Pediatria</figcaption>
                    </figure>

                    <figure className="box-especialidade">
                    <img src="assets/geriatra.png" alt="Imagem de uma geriatra" title="Imagem de uma geriatra"/>
                    <figcaption>Geriatria</figcaption>
                    </figure>
                </div>

                <div className="box-link-horarios">
                    <Link to='/horarios' className="link-horarios" onClick={scrollToTop}>Ver Horários</Link>
                </div>
            </section>
        </div>
    )
}