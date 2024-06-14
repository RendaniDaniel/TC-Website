import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>
               T.C Shivambu Speech Therapist & Audiologist </h1>
            <p>Transformative care blending speech therapy and audiology expertise. Personalized solutions for all ages, nurturing speech and restoring hearing clarity. Confidence, connection, and communication excellence.</p>
{/*
<button className='btn'>Eplore more <img src={dark_arrow} alt=''/> </button>
  */}
        </div>
    </div>
  )
}

export default Hero