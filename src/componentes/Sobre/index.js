import './styles.css'

export default function Sobre(){
    return(
        <div>
            <section id='sobre' className="limitar-secao ">
                <div className='texto-secao-sobre'>
                    <h2>Sobre a clínica</h2>
                    <p>Nossa clínica está pronta para receber nossos pacientes através de uma excelente estrutura, comodidade e com a segurança de que você precisam.</p>
                </div>

                <div className='lista-secao-sobre'>
                    <img src="assets/medico.jpg" alt="Imagem de um médico" title="Imagem de um médico"/>

                    <div>
                        <h3>Aqui na nossa clínica você vai encontrar:</h3>
                        <ul>
                            <li>Horário flexível. Atendemos de segunda à sábado.</li>
                            <li>Estacionamento amplo com 600 vagas.</li>
                            <li>Sala de espera com TV e Wifi.</li>
                            <li>Agendamento pelo telefone ou WhatsApp.</li>
                            <li>Excelente localização.</li>
                            <li>Entrega de exames em sua residência</li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    )
}