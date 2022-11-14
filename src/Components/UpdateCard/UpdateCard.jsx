import axios from "axios"
import React, { useState } from "react"
import './UpdateCard.css'


const UpdateCard = ({selectedcollection, open,onClose, cards, id, setId}) => {
    const [updatedword, setUpdatedWord] = useState('')
    const [updateddefinition, setUpdatedDefinition] = useState('')


    async function updateCard(){
        let updateCard = {
            word: updatedword,
            definition: updateddefinition
        }
        let response = await axios.put(`http://127.0.0.1:8000/api/collections/${selectedcollection}/cards/${id}/`, updateCard);
        if (response.status === 200) {
            await cards();
        }
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCard()
    }

   
    if(!open) return null
    return (
        <form onSubmit={handleSubmit}>
            <div className="Container">
                <p className="Close" onClick={onClose}>Close</p>
                <div className="updating_card">
                    UPDATING CARD . . .
                </div>

                <div>
                    <label className="word">Word <input type='text' value={updatedword} onChange={(event) => setUpdatedWord(event.target.value)} /> </label>
                </div>

                <div>
                    <label className="definition"> Definition <input type='text' value={updateddefinition} onChange={(event) => setUpdatedDefinition(event.target.value)} /></label>
                </div>

                <div className="id">
                    <label >ID <input  placeholder="id of card you wish to update" type='text' value={id} onChange={(event) => setId(event.target.value)} /> </label>
                </div>
                <button className="submit" type="submit">SAVE</button>
            </div>
        </form>
    )
}

export default UpdateCard