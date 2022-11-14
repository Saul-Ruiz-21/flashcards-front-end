import React, { useState, useEffect } from "react"
import axios from 'axios'
import './DeleteCard.css'


const DeleteCard = ({selectedcollection, cards, cardobj, id}) => {



    async function deleteCard(){
        let response = await axios.delete(`http://127.0.0.1:8000/api/collections/${selectedcollection}/cards/${id}/`);
        if (response.status === 204){
            await cards();
        }
    }

    const handleClick = () => {
        deleteCard();
    }

    return (
        <div>
            <button className="delete" type="Submit" onClick={() => handleClick()}>
                DELETE CARD
            </button>
        </div>
    )
}

export default DeleteCard