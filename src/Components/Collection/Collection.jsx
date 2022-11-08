import React, {useState} from "react"


const Collection = ({collections}) => {
    return(
        <div>
            {collections.map(collection => 
                <h3>{collection.title}</h3>)}
        </div>
    )
}

export default Collection