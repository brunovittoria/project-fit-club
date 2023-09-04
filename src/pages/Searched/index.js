import React from "react"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components'

export default function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)

        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }

    //O useEffect abaixo ira rodar a funçao que fizemos acima que estava suspensa ate entao

    useEffect(() => {
        getSearched(params.search) //Aqui usamos params.search para que o getSearched pegue o mesmo valor que setamos la no ROUTES
    }, [params.search]) //Colocamos essa codependencia pois queremos que o resultado da pesquisa se atualize cada vez que pesquisarmos

    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return(
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                            <img src={item.image} alt=""/>
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>

                )
            })}

        </Grid>
        ) 
}

const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
   grid-gap: 3rem;
`;

const Card = styled.div`
   img {
    width: 100%;
    border-radius: 2rem;
   }

   a{
    text-decoration: none;
   }

   h4{
    text-align: center;
    ppadding: 1rem;
   }
`;
