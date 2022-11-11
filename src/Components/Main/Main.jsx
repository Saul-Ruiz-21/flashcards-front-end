import React, { useState} from "react";
import CardContainer from "../CardContainer/CardContainer";
import SideBar from "../SideBar/SIdeBar";

const Main = (props) => {
    const [selectedcollection, setSelectedCollection] = useState(1)
    
    return(
        <div>
            <SideBar  selectedcollection={selectedcollection} setSelectedCollection={setSelectedCollection}/>
            <CardContainer selectedcollection={selectedcollection} setSelectedCollection={setSelectedCollection}/>
        </div>
    )
}

export default Main