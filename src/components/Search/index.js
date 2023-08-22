import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom' //Usamos o useNavigate pois ao usar ele iremos precisar de uma logica de navegacao mais sofisticada do que usar somente um (LINK)

export default function Search() {
    const [input, setInput] = useState("") //Iremos pegar o valor do input na NAVBAR usando o USESTATE
    const navigate = useNavigate()

    // Ao dar o submit queremos que a pagina carregue de acordo com oq pesquisarmos, porem queremos que o search bar e os ICONS nao sejam carregados

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }



    return( 

        //Na C.L 14 estamos colocando o INPUT como estado e no ONCHANGE (Quando começarmos a digitar no searchbar) estamos pedindo para que rode uma funcao pra que pegue o valor do texto que foi digitado e armazene no setInput

        <FormStyle onSubmit={submitHandler}> 
            <div> 
                <FaSearch></FaSearch> 
                <input onChange={(e) => setInput(e.target.value)} type='text' value={input}/> 
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 2rem 20rem;

    div{
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131); 
        font-size: 1.5rem;
        color: white;
        padding: 0.7rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }

`