import React, { useRef } from 'react'
import './Testimonials.css'
import data from './Testimonials.json'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import Card from '../Card/Card'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const imageMap = {
        "user-1.png": user1,
        "user-2.png": user2,
        "user-3.png": user3,
        "user-4.png": user4,
    }

    return (
        <div className='testimonials'>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <div className="slider">
                <ul ref={slider}>
                    {data.map((item) => {
                        return <li key={item.id}><Card img={imageMap[item.image]} name={item.name} loc={item.location} desc={item.description} /></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
