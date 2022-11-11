import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "../Card/Card";


const CardContainer = ({selectedcollection, selectedcard, setSelectedCard}) => {
    const [cards, setCards] = useState([])
    const [index, setIndex] = useState(0)

    
    async function getCards(){
        let response = await axios.get(`http://127.0.0.1:8000/api/collections/${selectedcollection}/cards/`)
        console.log(response)
        setCards(response.data)
    }


    useEffect(() => {
        getCards();
    }, [selectedcollection])





    return(
        <div>
            <Card cardobj={cards[index]} index={index} setIndex={setIndex}/>
        </div>
        
    )

}

export default CardContainer