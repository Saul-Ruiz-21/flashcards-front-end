import './SideBar.css'
import CollectionContainer from '../CollectionContainer/CollectionContainer'

const SideBar = ({selectedcollection, setSelectedCollection}) => {
    return(
        <div className="sidebar">
            <CollectionContainer  selectedcollection={selectedcollection} setSelectedCollection={setSelectedCollection}/>
        </div>
    )
}

export default SideBar