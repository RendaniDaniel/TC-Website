import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {

  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
        <h3>ABOUT YOUR DOCTOR</h3>
        <h3>Education</h3>
        <p>
SPEECH THERAPIST & AUDIOLOGIST
BSLPA honors UL, Medunsa
Practice no: 0810258</p>
<h3>What I Offer</h3>
<h4>Audiology</h4>
<p>Hearing screening & testing, Cerumen/wax management(ear syringing), Hearing aid fitting and repair, Aural rehabilitation and Audiology report writing</p>

<h4>Speech therapy</h4>
    <p>
Post stroke/head injury speech language therapy, Articulation and Language therapy, Assessment and management of feeding disorders, Neonatal feeding disorders assessment and management, Assessment and management of voice disorders, Assessment and management of language for learning disorders and Report writing</p>
        </div>
    </div>
  )
}

export default About