import React, { useState } from "react"
import './Card.css'


const Card = ({fluttercard, setFlutterCard}) => {



    return(
        <div className="fluttercard">
            <div className="card">
                <div className="front"><h3>{fluttercard.word}</h3></div>
                <div className="back"><h4>{fluttercard.definition}</h4></div>
            </div>
            
        </div>
    )
}

export default Card