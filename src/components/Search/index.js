import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

export default function Search() {
    return(
        <FormStyle>
            <div>
                <FaSearch></FaSearch>
                <input type='text'/>
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