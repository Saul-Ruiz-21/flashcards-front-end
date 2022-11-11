import React, { useState } from "react"
import './Card.css'


const Card = ({cards, setActiveCard}) => {


    return(
        <div className="fluttercard">
            <div className="card">
                <div className="front"><h3>{cards.word}</h3></div>
                <div className="back"><h4>{cards.definition}</h4></div>
            </div>
            
        </div>
    )
}

export default Card