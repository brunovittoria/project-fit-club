import './header.css'
import { Link } from 'react-router-dom'
//Imports que servirao no processo de DESLOGAR
import { auth } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'

export default function Header(){

    async function handleLogout(){
        await signOut(auth)
        console.log("Deslogou")
    }

    return(
        <header>
            <Link className='logo' to='/admin'>Fit Club</Link>
            <Link className='recipes' to='/recipes'>Minhas Receitas</Link>
            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </header>
    )
}