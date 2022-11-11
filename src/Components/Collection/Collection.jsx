import React, {useState} from "react"
import './Collection.css'


const Collection = ({collection, setCollection, selectedcollection}) => {

    const handleClick = () => {
        setCollection(collection.id)
        console.log(collection)
    }


    return(
        <div className="collections" onClick={() => handleClick()} >
            <h2>{collection.title}</h2>
        </div>
    )
}

export default Collection