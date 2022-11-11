import Collection from "../Collection/Collection"
import React, { useState, useEffect } from "react";
import axios from 'axios';

const CollectionContainer = ({selectedcollection, setSelectedCollection}) => {
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
            {collections.map(collection => 
                <Collection key={collection.id} collection={collection} setCollection={setSelectedCollection} selectedcollection={selectedcollection}/>)}
            
        </div>
    )
}

export default CollectionContainer;