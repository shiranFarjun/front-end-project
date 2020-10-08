import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Routes from '../../router/Routes'

import { Button } from '../Button'
import './Navbar.css'

import img from '../../img/logo.ico'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const style={
        width:'40px',
        height:'40px', 
        filter:'invert(100%)',
    }

    return <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to={Routes.home} className="navbar-logo" onClick={closeMobileMenu} >
                    <img src={img} alt='' style={style} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={Routes.location} className='nav-links' onClick={closeMobileMenu}>
                            Location
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={Routes.catering} className='nav-links' onClick={closeMobileMenu}>
                            Catering food
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={Routes.design} className='nav-links' onClick={closeMobileMenu}>
                            Design
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={Routes.signUp}
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn-outline'>SIGN UP</Button>}
            </div>
        </nav>

    </>
};

export default Navbar
