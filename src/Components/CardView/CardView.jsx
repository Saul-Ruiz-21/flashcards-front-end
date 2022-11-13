import './CardView.css'


const CardView = ({cardobj, index, setIndex, cardnumber, setCardNumber}) => {

   const next = () => {
    if(index != cardobj.length -1){
        setIndex(index + 1)
        setCardNumber(index + 2)
    }
    else{
        setIndex(0)
        setCardNumber(1)
    }
   }

   const prev =() => {
    if(index != 0){
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
        </div>
    )
}

export default CardView