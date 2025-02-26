import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/Logo-1.png';
import insta from '../../../assets/2227-Photoroom.png';
import { FaHeart,  } from 'react-icons/fa';
import { useState } from 'react';



const Navbar = () => {
    const [liked, setLiked] = useState(0);
    const [isOpen, setIsopen] = useState(false);

    const HandlerLiked = () => {
        setLiked(liked + 1);
    }

    const HandlerHumburger = () => {
        setIsopen(!isOpen);
    }

    return (
        <nav className="nav-container">
            <div className='info-ender'>
                <p>Rua Comandante Rubens Silva, 253
                Freguesia, Rio de Janeiro, RJ</p>
            </div>
            <div className='control'>
                <div className='logo'>
                        <img src={logo}/>
                    </div>
                    {/* criando  o menu hamburger*/}
                    <div className={`hamburger ${ isOpen ? "open" : " "}`} onClick={HandlerHumburger}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`menu ${ isOpen ? "open" : " "}`}>
                        <Link className='l-menu' to={'/'}>Home</Link>
                        <Link className='l-menu' to={'/turmas'}>Turmas</Link>
                        <Link className='l-menu' to={'/about'}>Mestre</Link>
                        <FaHeart className='heart' onClick={HandlerLiked}/>
                        
                        <div className="n-like">
                            <span>{liked}</span>
                        </div>

                        <a href="#" className='link-insta'>
                            <img src={insta}/>
                        </a>
                        
                    </div>
                    
                
            </div>
            
        </nav>
        
    )
}

export default Navbar;