import React, { useState} from "react";
import CardContainer from "../CardContainer/CardContainer";
import SideBar from "../SideBar/SIdeBar";

const Main = (props) => {

    
    return(
        <div>
            <SideBar  />
            <CardContainer />
        </div>
    )
}

export default Main