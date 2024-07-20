import React, { useState } from 'react';
import './index.css';
import logo from '../../assets/pngwing.com - 2024-07-08T203434.884.png';
import { Link, NavLink } from 'react-router-dom';

export default function NavigationBar({ cartCount }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='navbar'>
            <nav>
        
                <section className='logo'>
                <NavLink to={'/admin'} activeClassName='active'>
                    <img src={logo} alt="Vitality Vault Logo" />
                    </NavLink>
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
                        aria-controls="menu-list"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </span>
                    <ul id="menu-list" className={menuOpen ? 'open' : ''}>
                    <li>
                           
                         
                        </li>

                        <li>
                            <NavLink to={'/'} activeClassName='active'>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/trainer'} activeClassName='active'>
                                TRAINERS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/shop'} activeClassName='active'>
                                SHOP
                                {cartCount > 0 && (
                                    <span className="cart-count">{cartCount}</span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/member'} activeClassName='active'>
                                MEMBERSHIP
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    );
}
