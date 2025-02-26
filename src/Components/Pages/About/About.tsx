import './About.css';
import mestre from '../../../assets/mestre-espiga.jpg';


const About = () => {
    return (
        <div className="container">
            <div className="description-mestre">
                <div className="img-b">
                    <img src={mestre}/>
                </div>
                
                <div className="title">
                    <div className='mestre'>
                        <h1>Mestre espiga</h1>
                    </div>
                    <h2>
                        <strong style={{fontWeight: '900'}}>João Jardim</strong>, conhecido como <strong style={{fontWeight: '900'}}>Espiga</strong>, iniciou seu aprendizado na Capoeira em 1986, com o então contra mestre do Grupo Senzala Mestre Boneco, participando como aluno da fundação do Grupo Capoeira Brasil em 1989.

                        Há mais de 25 anos dissemina a cultura brasileira pelo mundo como professor de Capoeira e atualmente ministra aulas para crianças e adultos em seu espaço inteiramente dedicado a Capoeira, visando uma didática abrangente que transmita noções musicais, domínio corporal, ensinamentos histórico-culturais brasileiros e afrodescendentes, além de importantes valores para a formação do ser, como a humildade, interação, respeito mútuo e disciplina.

                        Espiga busca através da Capoeira, o desenvolvimento de seus alunos muito além do aspecto físico e é reconhecido pela sua forma de ensinar a Capoeira, participando de eventos em diversos países e transmitindo seus ensinamentos para capoeiristas de diferentes culturas.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default About;