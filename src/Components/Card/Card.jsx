import React, { useState } from "react"
import './Card.css'


const Card = ({card}) => {
    


    return(
        <div className="fluttercard">
            <div className="card">
                <div className="front"><h3>{card.word}</h3></div>
                <div className="back"><h4>{card.definition}</h4></div>
            </div>
            
        </div>
    )
}

export default Card