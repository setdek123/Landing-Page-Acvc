import mirim from '../../../assets/turma-mirim.jpg';
import infantil from '../../../assets/turma-infantil.jpg';
import adulto from '../../../assets/turma-adulto.jpg';
import './Turmas.css';

const Turmas = () => {
    return (
        <div className="container">
            <div className="title">
                <h1>Nossas Turmas</h1>
            </div>
            <div className="cards">
                <div className="mirim">
                    <img src={mirim} />
                    <div className="descript">
                        <div className='title-card'>
                            <h2>Mirim</h2>
                        </div>
                        <div className='org-title'>
                            <span><strong>Idade</strong> : 3 a 8 anos</span>
                            <span><strong>Dias</strong> : Terça e Quinta</span>
                            <span><strong>Horários</strong> : 18h30 a 19h30</span>
                        </div>
                    </div>
                </div>
                <div className="infantil">
                    <img src={infantil} />
                    <div className="descript">
                        <div className='title-card'>
                            <h2>Infantíl</h2>
                        </div>
                        <div className='org-title'>
                            <span><strong>Idade</strong> : 9 a 13 anos</span>
                            <span><strong>Dias</strong> : Segunda, Quarta e Sexta</span>
                            <span><strong>Horários</strong> : 18h30 a 19h30</span>
                        </div>

                    </div>
                </div>
                <div className="adulto">
                    <img src={adulto} />
                    <div className="descript">
                        <div className='title-card'>
                            <h2>Adulto</h2>
                        </div>
                        <div className='org-title'>
                            <span><strong>Idade</strong> : 14 anos +</span>
                            <span><strong>Dias</strong> : Segunda a Sexta</span>
                            <span><strong>Horários</strong> : 20h a 21h30</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Turmas;