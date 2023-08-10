import './admin.css'
import Veggie from '../../components/Veggie'
import Popular from '../../components/Popular'
import Category from '../../components/Category'


export default function Admin() {

    return(
        <div>
            <Category />
            <Veggie />
            <Popular />
        </div>
    )
}