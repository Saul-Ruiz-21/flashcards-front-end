import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "../Card/Card";


const CardContainer = (props) => {
    const [fluttercards, setFlutterCards] = useState([])
    const [csscards, setCssCards] = useState([])
    const [pandascards, setPandasCards] = useState([])
    
    async function getAllFlutterCards(){
        let response = await axios.get('http://127.0.0.1:8000/api/collections/1/cards/')
        console.log(response)
        setFlutterCards(response.data)
    }

    async function getAllCssCards(){
        let response = await axios.get('http://127.0.0.1:8000/api/collections/2/cards/')
        console.log(response)
        setCssCards(response.data)
    }

    async function getAllPandasCards(){
        let response = await axios.get('http://127.0.0.1:8000/api/collections/3/cards/')
        console.log(response)
        setPandasCards(response.data)
    }


    useEffect(() => {
        getAllFlutterCards();
        getAllCssCards();
        getAllPandasCards();
    }, [])

    return(
        <div>
            <div>
                {fluttercards.map(fluttercard => 
                    <Card key={fluttercard.id} fluttercard={fluttercard} setFlutterCard={setFlutterCards}/>)}
            </div>

            <div>
                
            </div>
            
        </div>
        
    )

}

export default CardContainer