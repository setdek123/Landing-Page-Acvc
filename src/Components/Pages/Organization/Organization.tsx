import './Organization.css';
import About from "../About/About";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Turmas from "../Turmas/Turmas";
import whats from '../../../assets/whatsapp.png';

const Organization = () => {
    return (
        <>
            <div className="container-main">
                <Navbar/>
                <Home/>
                <About/>
                <Turmas/>
                <div className='whats-main'>
                    <img src={whats}/>
                </div>
            </div>
            
        </>
        
        
    );
}

export default Organization;