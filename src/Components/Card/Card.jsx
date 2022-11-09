import React, { useState } from "react"
import './Card.css'


const Card = ({fluttercard}) => {

    function cards(){
        let flutter = fluttercard.filter()
    }

    return(
        <div className="fluttercard">
            {fluttercard.word}
        </div>
    )
}

export default Card