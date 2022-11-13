import './CardView.css'


const CardView = ({cardobj, index, setIndex}) => {

   const next = () => {
    if(index != cardobj.length -1){
        setIndex(index + 1)
    }
    else{
        setIndex(0)
    }
   }

   const prev =() => {
    if(index != 0){
        setIndex(index - 1)
    }
    else{
        setIndex(cardobj.length - 1)
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
        </div>
    )
}

export default CardView