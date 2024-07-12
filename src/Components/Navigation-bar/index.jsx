import React, { useState } from 'react';
import './index.css';
import logo from '../../assets/pngwing.com - 2024-07-08T203434.884.png'


export default function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='navbar'>
            <nav>
                <section className='logo'>
                    <img src={logo} alt="" />
                 
                    <section>
                        <span>VITALITY</span>
                        <span style={{ color: "#F28e00" }}>VAULT</span>
                    </section>
                </section>
                <section className='links'>
                    <span 
                        className='menu' 
                        onClick={toggleMenu}
                        aria-expanded={menuOpen}
                        aria-label="Toggle menu"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </span>
                    <ul className={menuOpen ? 'open' : ''}>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>TRAINERS</li>
                        <li>PRICES</li>
                        <li>BOOKINGS</li>
                    </ul>
                </section>
            </nav>
        </div>
    );
}
