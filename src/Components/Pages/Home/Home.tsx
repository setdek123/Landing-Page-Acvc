import './Home.css';
import bg_fundo from '../../../assets/img-1.jpg';
import bg_2 from '../../../assets/img-2.jpg';
import bg_3 from '../../../assets/img-3.jpg';
import bg_4 from '../../../assets/img-4.jpg';
import { useState, useEffect } from 'react';

const listChange = [bg_fundo, bg_2, bg_3, bg_4];

const Home = () => {
    const [change, setChange] = useState(bg_fundo);

    const makeIt = () => {
        const animChange = Math.floor(Math.random() * listChange.length);
        setChange(listChange[animChange]);
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            makeIt();
        }, 2000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div 
            className="bg"
            style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${change})`, 
                position: 'relative', 
                width: '100vw', 
                height: '100vh', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                zIndex: '-1'
            }}
        >
            <h1>Muito mais que luta: ritmo, arte e tradição!</h1>
        </div>
    );
}

export default Home;
