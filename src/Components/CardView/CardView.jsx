import './CardView.css'


const CardView = ({cardobj, index, setIndex}) => {

    const next = () => {
        if(index === cardobj.length){
            setIndex(index + 1)
        }
    }

    return (
        <div className="Button" onClick={next}>
            <button>NEXT</button>
        </div>
    )
}

export default CardView