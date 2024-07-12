import React, { useState, useEffect } from 'react'
import './index.css'
import weightloss from '../../../assets/fuu-j-Fu7RNjl-pW0-unsplash.jpg'
import muscelgain from '../../../assets/samuel-girven-rFuPln3EARk-unsplash.jpg'
import tonning from '../../../assets/charles-gaudreault-xXofYCc3hqc-unsplash.jpg'
import rehab from '../../../assets/sushil-ghimire-DC5akQJyH4I-unsplash.jpg'
export default function Goals() {


    return (
        <div className='goals'>
            <h1 className='goals-title'>Achieve your body goals-<span className='faster'>Faster</span> </h1>
            <div className="container">
                <div className="card">
                    <img src={weightloss} alt="Weight loss" />
                    <section className='card-content'>
                        <h2>Weight Loss</h2>
                    </section>
                </div>
                <div className="card">
                    <img src={muscelgain} alt="muscel gain" />
                    <section className='card-content'>
                        <h2>Muscel Gain</h2>
                    </section>
                </div>
                <div className="card">
                    <img src={tonning} alt="Toning/Sculpting" />
                    <section className='card-content'>
                        <h2>Toning/Sculpting</h2>
                    </section>
                </div>
                <div className="card">
                    <img src={rehab} alt="Rehabilitation" />
                    <section className='card-content'>
                        <h2>Rehabilitation</h2>
                    </section>
                </div>
            </div>
           

        </div>
    )
}

