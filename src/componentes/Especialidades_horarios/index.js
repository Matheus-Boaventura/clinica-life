import './styles.css'
import { Link } from 'react-router-dom'

export default function Especialidades_horarios(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <main>
           <section className="limitar-secao">
           <Link className='Link' to='/' onClick={scrollToTop} >Voltar para Home</Link>
                <div className="container links-especialidades">
                    <a href="#ortopedia">Ortopedia</a>
                    <a href="#pediatria">Pediatria</a>
                    <a href="#geriatria">Geriatria</a>
                    <a href="#psicologia">Psicologia</a>
                    <a href="#fisioterapia">Fisioterapia</a>
                </div>

                <h1 className='section-h1'>Conheça as nossas especialidades</h1>
            </section>

            <section id="ortopedia" className="limitar-secao sessao-especialidade">
                <div className="container-titulo">
                    <h3>Ortopedia</h3>
                    <p>A ortopedia é a especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações.</p>
                </div>

                <div className="box-tabela-especialista">
                    <img src="assets/ortopedia.png" alt="Ortopedia" title="Ortopedia"/>

                    <table className="tabela-especialistas">
                        <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Segunda e quartas</td>
                            <td>8:00 às 13:00</td>
                            <td>Dra. Daniele Almeida</td>
                        </tr>
                        <tr>
                            <td>Terça, Quinta e Sexta</td>
                            <td>14:00 às 21:00</td>
                            <td>Dr. Daniel Souza</td>
                        </tr>
                        <tr>
                            <td>Sábado</td>
                            <td>8:00 às 21:00</td>
                            <td>Dr. Manoel Bento</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                </section>

            <section id="pediatria" className=" limitar-secao sessao-especialidade">
                <div className="container-titulo">
                    <h3>Pediatria</h3>
                    <p>A pediatria é a especialidade médica dedicada à assistência à criança e ao adolescente, nos seus diversos aspectos, sejam eles preventivos ou curativos.</p>
                </div>

                <div className="box-tabela-especialista">
                    <img src="assets/pediatra2.png" alt="Pediatria" title="Pediatria"/>
                    <table className="tabela-especialistas">
                        <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Segunda e quartas</td>
                            <td>8:00 às 15:00</td>
                            <td>Dra. Elaine pinheiro</td>
                        </tr>
                        <tr>
                            <td>Terça, Quinta e Sexta</td>
                            <td>13:00 às 21:00</td>
                            <td>Dr. Anderson Ramos</td>
                        </tr>
                        <tr>
                            <td>Sábado</td>
                            <td>8:00 às 12:00</td>
                            <td>Dra. Manoela Foster</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="geriatria" className="limitar-secao sessao-especialidade">
                <div className="container-titulo">
                    <h3>Geriatria</h3>
                    <p>Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas.</p>
                </div>

                <div className="box-tabela-especialista">
                    <img src="assets/geriatra.png" alt="Geriatria" title="Geriatria"/>

                    <table className="tabela-especialistas">
                    <thead>
                        <tr>
                        <th>Dias</th>
                        <th>Horários</th>
                        <th>Médico(a)</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td>Segunda e quinta</td>
                        <td>9:00 às 12:00</td>
                        <td>Dr. Antônio Freitas</td>
                        </tr>
                        <tr>
                        <td>Terça e Quarta</td>
                        <td>9:00 às 16:00</td>
                        <td>Dr. Alfred Conceição</td>
                        </tr>
                        <tr>
                        <td>Sexta</td>
                        <td>08:00 às 19:00</td>
                        <td>Dr. Almir Aguiar</td>
                        </tr>
                        <tr>
                        <td>Sábado</td>
                        <td>08:00 às 14:00</td>
                        <td>Dra. Andrea Almeida</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </section>

            <section id="psicologia" className="limitar-secao sessao-especialidade">
                <div className="container-titulo">
                    <h3>Psicologia</h3>
                    <p>Psicologia é a especialidade médica que trata da mente, do estudo e análise de seus processos e comportamento de indivíduos e grupos humanos em diferentes situações.</p>
                </div>

                <div className="box-tabela-especialista">
                    <img src="assets/psicologo.png" alt="Psicologia" title="Psicologia"/>
                    <table class="tabela-especialistas">
                        <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Segunda, terça e quarta</td>
                            <td>8:00 às 21:00</td>
                            <td>Dra. Diane Faguntes</td>
                        </tr>
                        <tr>
                            <td>Quinta e Sexta</td>
                            <td>14:00 às 18:00</td>
                            <td>Dr. Daniel Dias</td>
                        </tr>
                        <tr>
                            <td>Sábado</td>
                            <td>10:00 às 15:00</td>
                            <td>Dra. Beatriz Luz</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="fisioterapia" className="limitar-secao sessao-especialidade">
                <div className="container-titulo">
                    <h3>Fisioterapia</h3>
                    <p>Fisioterapia é uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas.</p>
                </div>

                <div className="box-tabela-especialista">
                    <img src="assets/fisioterapia.png" alt="Fisioterapia" title="Fisioterapia"/>
                    <table className="tabela-especialistas">
                        <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Segunda e quinta</td>
                            <td>11:00 às 20:00</td>
                            <td>Dr. Alberto de Paula</td>
                        </tr>
                        <tr>
                            <td>Segunda e quartas</td>
                            <td>08:00 às 15:00</td>
                            <td>Dra. Maria Fernades</td>
                        </tr>
                        <tr>
                            <td>Terça e sexta</td>
                            <td>14:00 às 21:00</td>
                            <td>Dra. Elaine Peixoto</td>
                        </tr>
                        <tr>
                            <td>Terça e quinta</td>
                            <td>08:00 às 14:00</td>
                            <td>Dra. Elaine Peixoto</td>
                        </tr>
                        
                        </tbody>

                    </table>
                </div>
            </section>
        </main>
    )
}