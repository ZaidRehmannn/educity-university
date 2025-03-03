import React from 'react'
import './Card.css'

const Card = ({ img, name, loc, desc }) => {
    return (
        <div className="slide">
            <div className="user-info">
                <img src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <span>{loc}</span>
                </div>
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default Card
