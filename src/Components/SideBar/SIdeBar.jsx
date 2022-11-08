import './SideBar.css'
import Collection from '../Collection/Collection'

const SideBar = ({collections, setCollections}) => {
    return(
        <div className="sidebar">
            <Collection collections={collections}/>
        </div>
    )
}

export default SideBar