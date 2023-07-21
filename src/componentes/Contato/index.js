import './styles.css'


export default function Contato(){
    return(
        <section id="contato" className="limitar secao">
            <div className="container-conteudo">
                <h3>Contato</h3>
                <p>Nossa clínica médica está aberto de <strong>segunda à sábado das 6:00 às 21:00</strong></p>
                <p>Através do telefone/WhatsApp <strong>(21) 99966-5555</strong> você pode fazer o agendamento de consultas e exames.</p>
                <p>Estamos localizados no estacionamento do Via Parque Shopping <strong>av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro</strong>.</p>
            </div>

            <div className="limitar-secao">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14692.471710812997!2d-43.3641911!3d-22.9826906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1612707978931!5m2!1spt-BR!2sbr" width="100%" height="350" frameborder="0" allowfullscreen></iframe>
            </div>
        </section>
    )
}