import './header.css'
import { Link } from 'react-router-dom'
//Imports que servirao no processo de DESLOGAR
import { auth } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import styled  from 'styled-components'
import Logo from '../../assets/logo.svg.png'

export default function Header(){

    async function handleLogout(){
        await signOut(auth)
        console.log("Deslogou")
    }

    return(
        <header>
            <Nav>
            <Link to={"/admin"} className="nav-logo-container-admin">
                <img className='logo-admin-nav' src={Logo} alt="" />
            </Link>
            </Nav>
            <button className='btn-logout' onClick={handleLogout}>Exit</button>
        </header>
    )
}


const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
        font-size: 2rem;
    }
`

