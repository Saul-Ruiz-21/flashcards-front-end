import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "../Card/Card";
import CardView from "../CardView/CardView";


const CardContainer = ({selectedcollection, selectedcard, setSelectedCard}) => {
    const [activecard, setActiveCard] = useState([])

    
    async function getCards(){
        let response = await axios.get(`http://127.0.0.1:8000/api/collections/${selectedcollection}/cards/`)
        console.log(response)
        setActiveCard(response.data)
    }


    useEffect(() => {
        getCards();
    }, [selectedcollection])

    return(
        <div>
            <div>
                {activecard.map(cards => 
                    <Card key={cards.id} cards={cards} setActiveCard={setActiveCard}/>)}
            </div>

            <div>
                <CardView activecard={activecard} selectedcard={selectedcard} setSelectedCard={setSelectedCard}/>
            </div>

        </div>
        
    )

}

export default CardContainer