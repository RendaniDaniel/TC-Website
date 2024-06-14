import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
 
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
 
}



  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Mathavha Vhuthuhawe</h3>
                                <span>Gauteng, RSA</span>
                            </div>
                        </div>
                        <p>Mrs Shivambu has been instrumental in transforming my speech. 
                            Her expertise and patience have made my therapy journey incredibly rewarding.
                             I'm grateful for her guidance and highly recommend him to anyone seeking speech therapy services</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Anonymous</h3>
                                <span>Rustenburg, RSA</span>
                            </div>
                        </div>
                        <p>Dr. Shivambu provided exceptional care during my ear wax cleaning appointment. 
                            His expertise and gentle approach made the experience comfortable and effective. 
                            I highly recommend him for anyone in need of ear care services.</p>
                    </div>
                </li>  <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Dr Nedzungani Unarine</h3>
                                <span>KZN, RSA</span>
                            </div>
                        </div>
                        <p>Mrs Shivambu has been instrumental in transforming my speech. 
                            Her expertise and patience have made my therapy journey incredibly rewarding.  
                        I'm grateful for his guidance and highly recommend her to anyone seeking speech therapy services</p>
                    </div>
                </li>  <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Rendani Mulaudzi</h3>
                                <span>Limpopo, RSA</span>
                            </div>
                        </div>
                        <p>TC Shivambu provided exceptional care during my ear wax cleaning appointment. 
                            Her expertise and gentle approach made the experience comfortable and effective. 
                            I highly recommend her for anyone in need of ear care services.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials