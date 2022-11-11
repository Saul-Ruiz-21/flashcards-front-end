import React, { useState } from "react"


const CardView = ({selectedcard, setSelectedCard, activecard}) => {

    const handleClick = () => {
        setSelectedCard(activecard.id)
    }

    return(
        <div>
            <div>
                <button >NEXT</button>
            </div>
            
            <div>
                <button>PREV</button>
            </div>
        </div>
    )

}

export default CardView