import React, { useState } from 'react';
import './index.css';
import logo from '../../assets/pngwing.com - 2024-07-08T203434.884.png';
import { Link } from 'react-router-dom';

export default function NavigationBar({ cartCount }) {
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
                        <Link to={'/'} className='active'>
                            <li>HOME</li>
                        </Link>
                        <Link to={'/trainer'} className='active'>
                            <li>TRAINERS</li>
                        </Link>
                        <Link to={'/shop'} className='active'>
                            <li> SHOP
                                {cartCount > 0 && (
                                    <span className="cart-count">{cartCount}</span>
                                )}
                            </li>
                        </Link>
                        <Link to={'/booking'} className='active'>
                            <li>BOOKINGS</li>
                        </Link>
                    </ul>
                </section>
            </nav>
        </div>
    );
}

