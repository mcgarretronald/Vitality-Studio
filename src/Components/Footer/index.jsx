import React from 'react'
import './index.css'
export default function Footer() {
  return (
    <div>
        <footer>
            <div className="links">
                <section>
                    <h3>COMPANY</h3>
                    <ol>
                        <li>Our Team</li>
                        <li>Company Vision</li>
                        <li>Our History</li>
                        <li>Inventory</li>
                    </ol>
                </section>
                <section>
                    <h3>ABOUT US</h3>
                    <ol>
                        <li>Our Team</li>
                        <li>Blog</li>
                        <li>Our History</li>
                        <li>Inventory</li>
                    </ol>
                </section>
                <section>
                    <h3>RESOURCES</h3>
                    <ol>
                        <li>New Features</li>
                        <li>Roadmap</li>
                        <li>Product DEmo</li>
                        <li>FAQ</li>
                    </ol>
                </section>
                <section>
                    <h3>SUPPORTS</h3>
                    <ol>
                        <li>Sosmed</li>
                        <li>You Tube</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ol>
                </section >
                <section className='footer-form'>
                    <form>
                        <label htmlFor="email">Sign up for news and alerts</label>
                        <input type="email" placeholder='Enter your email' />

                    </form>

                </section>
            </div>

            <div className="line">
                <hr />
            </div>
            <div className="copyright">
                <section>
                    All rights Reserved   Copyright © 2022
                </section>
                <section>
                   <section>
                    Terms Of Service
                   </section>
                   <section>
                    Privacy Policy
                   </section>
                </section>
            </div>
           

        </footer>
       
      
    </div>
  )
}
