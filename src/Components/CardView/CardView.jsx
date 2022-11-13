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

    return (
        <div>
            <div>{cardobj[index]}</div>
            <button className='Next_Button' onClick={() => next()}>
                NEXT
            </button>
        </div>
    )
}

export default CardView