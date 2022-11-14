import './CardView.css'
import React, { useState, useEffect } from "react";
import AddCard from '../AddCard/AddCard';
import DeleteCard from '../DeleteCard/DeleteCard';
import UpdateCard from '../UpdateCard/UpdateCard';


const CardView = ({cardobj, selectedcollection, cards}) => {
    const [index, setIndex] = useState(0)
    const [cardnumber, setCardNumber] = useState(1)
    const [modal, setModal] = useState(false)

   const next = () => {
    if(index !== cardobj.length -1){
        setIndex(index + 1)
        setCardNumber(index + 2)
    }
    else{
        setIndex(0)
        setCardNumber(1)
    }
   }

   const prev =() => {
    if(index !== 0){
        setIndex(index - 1)
        setCardNumber(cardnumber - 1)
    }
    else{
        setIndex(cardobj.length - 1)
        setCardNumber(cardobj.length)
    }
   }



    return (
        <div>
            <div>{cardobj[index]}</div>
            <button className='Next_Button' onClick={() => next()}>
                NEXT
            </button>
            <button className='Prev_Button' onClick={() => prev()}>
                PREV
            </button>
            <div className='card_number'>
                {cardnumber}
            </div>

            <div >
                <button onClick={() => setModal(true)} className='add_new_card'>ADD CARD</button>
                <AddCard onClose={()=> setModal(false)} open={modal} selectedcollection={selectedcollection} cards={cards} />
            </div>

            <div>
                <DeleteCard selectedcollection={selectedcollection} cardobj={cardobj} cards={cards} index={index}/>
            </div>

            <div>
                <UpdateCard cards={cards} cardobj={cardobj} selectedcollection={selectedcollection} />
            </div>
        </div>
    )
}

export default CardView