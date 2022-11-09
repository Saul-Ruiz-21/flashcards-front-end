import React, { useState } from "react"
import './Card.css'


const Card = ({fluttercard}) => {



    return(
        <div className="card">
            {fluttercard.word}
        </div>
    )
}

export default Card