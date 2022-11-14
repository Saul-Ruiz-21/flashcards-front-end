import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "../Card/Card";
import CardView from "../CardView/CardView";
import AddCard from "../AddCard/AddCard";


const CardContainer = ({selectedcollection, selectedcard, setSelectedCard}) => {
    const [cards, setCards] = useState([])


    
    async function getCards(){
        let response = await axios.get(`http://127.0.0.1:8000/api/collections/${selectedcollection}/cards/`)
        console.log(response)
        setCards(response.data)
    }


    useEffect(() => {
        getCards();
    }, [selectedcollection])


    const cardobj = cards.map(card => 
        <Card key={card.id} card={card}/>)


    return(
        <div>
            <CardView cards={cards} cardobj={cardobj} selectedcollection={selectedcollection} />
        </div>
        
    )

}

export default CardContainer