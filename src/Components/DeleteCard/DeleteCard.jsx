import React, { useState } from "react"
import axios from 'axios'
import './DeleteCard.css'


const DeleteCard = ({selectedcollection, cards, id, setId}) => {

    async function deleteCard(){
        let response = await axios.delete(`http://127.0.0.1:8000/api/collections/${selectedcollection}/cards/${id}/`);
        if (response.status === 204){
            await cards();
        }
    }

    function handleClick(){
        deleteCard();
    }

    return (
        <div>
            <label className="delete" type="Submit" >
                DELETE CARD <input type="text" placeholder="Enter ID to Delete" value={id} onChange={(event) => setId(event.target.value)}/>
            </label>
            <button type="submit" className="button" onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default DeleteCard