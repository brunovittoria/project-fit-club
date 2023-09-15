import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleRegister(e){
        e.preventDefault()

        if(email !== '' && password !== ''){
            await createUserWithEmailAndPassword(auth,email,password)
            
            .then(() => {
                navigate('/admin', { replace: true})
            })
            .catch(() => {
                console.log("Erro ao fazer cadastro")
            })
        } 
            else{
                alert("Preencha todos os campos!!")
            }
    }

    return(
        <div className='home-container'>
            <h1>Register</h1>
            <span>Let's create your account</span>

            <form className='form' onSubmit={handleRegister}>
                <input
                type='text'
                placeholder='Type your email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                type='password'
                placeholder='**********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Register</button>
            </form>

            <Link className='button-link' to="/">
            Already have a registration? Click here
            </Link>


        </div>

        
    )
}