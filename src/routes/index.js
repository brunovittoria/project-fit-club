import { Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Admin from '../pages/Admin'
import Recipes from '../pages/Recipes'
import Header from '../components/Header'
import Cuisine from '../pages/Cuisine'
import Search from '../components/Search'
import Searched from '../pages/Searched'

import Private from './Private'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/register' element= { <Register/>} />
            
            <Route path='/admin' element={ <Private> <Header/> <Search/> <Admin/> </Private>}/>
            <Route path='/recipes' element={ <Private> <Header/> <Recipes/> </Private>}/>
            <Route path='/cuisine/:type' element={ <Private> <Header/> <Search/> <Cuisine/> </Private>}/>
            <Route path='/searched/:search' element= { <Private> <Header/> <Searched/> </Private> }/>
        </Routes>

        //Esse :type ira servir para renderizar a culinaria selecionada pelo usuario, isso é usado quando queremos navegar o usuario por diferentes partes da nossa pagina.
        
    )
}

export default RoutesApp