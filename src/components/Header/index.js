import './header.css'
import { Link } from 'react-router-dom'
//Imports que servirao no processo de DESLOGAR
import { auth } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import styled  from 'styled-components'
import { GiKnifeFork } from 'react-icons/gi'

export default function Header(){

    async function handleLogout(){
        await signOut(auth)
        console.log("Deslogou")
    }

    return(
        <header>
            <Nav>
            <GiKnifeFork/>
            <Logo to={"/admin"}>Fit Club</Logo>
            </Nav>
            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </header>
    )
}

const Logo = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
        font-size: 2rem;
    }
`

