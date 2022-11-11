import React, { useState } from "react"
import './Card.css'


const Card = ({cardobj, index, setIndex}) => {
    
    const next = () => {
        if(index === cardobj.length){
            setIndex(index + 1)
        }
    }

    return(
        <div className="fluttercard">
            <div className="card">
                <div className="front"><h3>{cardobj.word}</h3></div>
                <div className="back"><h4>{cardobj.definition}</h4></div>
            </div>
            
            <div className="Button" onClick={next}>
                <button>NEXT</button>
            </div>
        </div>
    )
}

export default Card