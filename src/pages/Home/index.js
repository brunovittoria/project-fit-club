import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleLogin(e){
        e.preventDefault()

        if(email !== '' && password !== ''){
            
            await signInWithEmailAndPassword(auth, email, password)

            .then(() => {
                navigate('/admin', {replace:true})
            })
            .catch(() => {
                console.log("Erro ao fazer LOGIN")
            })

        } else{
            alert("Preencha todos os campos!")
        }
    }

    return(
        <div className='home-container' id='form'>
            <h1>Yummie</h1>
            <span>Experience culinary excellence like never before.</span>

            <form className='form' onSubmit={handleLogin}>
                <input
                type='text'
                placeholder='Type your email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                autoComplete={false}
                type='password'
                placeholder='**********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Acess</button>
                
            </form>

            <Link className='button-link' to="/register">
             Don't have an account yet?  Sign Up 
            </Link>


        </div>

        
    )
}