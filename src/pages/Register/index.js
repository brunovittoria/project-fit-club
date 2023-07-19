import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleRegister(e){
        e.preventDefault()

        if(email !== '' && password !== ''){
            alert("Campos preenchidos com sucesso!")
        } else{
            alert("Preencha todos os campos!")
        }
    }

    return(
        <div className='home-container'>
            <h1>Cadastre-se</h1>
            <span>Vamos criar sua conta</span>

            <form className='form' onSubmit={handleRegister}>
                <input
                type='text'
                placeholder='Digite seu email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                autoComplete={false} //Usamos o false pois nao queremos que o navegador forneca opçoes de senhas ja que estamos criando uma conta do 0
                type='password'
                placeholder='**********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Acessar</button>
                
            </form>

            <Link className='button-link' to="/">
               Já tem cadastro? Entre aqui
            </Link>


        </div>

        
    )
}