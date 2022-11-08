import React, { useState, useEffect } from "react";
import axios from 'axios';
import SideBar from "../SideBar/SIdeBar";

const Main = (props) => {
    const [collections, setCollections] = useState([])

    async function getAllCollections(){
        let response = await axios.get('http://127.0.0.1:8000/api/collections/')
        console.log(response)
        setCollections(response.data)
    }


    useEffect(() => {
        getAllCollections();
    }, [])

    return(
        <div>
            <SideBar collections={collections} setCollections={setCollections} />
        </div>
    )
}

export default Main