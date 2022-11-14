import React, { useState, useEffect } from "react"
import axios from 'axios'
import './AddCard.css'


const AddCard = ({selectedcollection, cards, open, onClose}) => {
    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')

    async function createCard(){
        let newCard = {
            word: word,
            definition: definition
        }
        let response = await axios.post(`http://127.0.0.1:8000/api/collections/${selectedcollection}/cards/`, newCard);
        if(response.status===201){
            await cards();
        }
    }

    useEffect(() => {
        createCard();
    }, [selectedcollection])

    const handleSubmit = (event) => {
        event.preventDefault();
        createCard('')
        setWord('')
        setDefinition('')
    };
    if(!open) return null
    return (
        <form onSubmit={handleSubmit}>
            <div className="Container">
                <p className="Close" onClick={onClose}>Close</p>
                <div className="adding_song">
                    ADDING SONG . . .
                </div>

                <div>
                    <label>Word <input type='text' value={word} onChange={(event) => setWord(event.target.value)} /> </label>
                </div>

                <div>
                    <label> Definition <input type='text' value={definition} onChange={(event) => setDefinition(event.target.value)} /></label>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )

    
}

export default AddCard