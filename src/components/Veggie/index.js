import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import './veggie.css'
import { Link } from "react-router-dom";



export default function Veggie(){

    const [veggie, setVeggie] = useState([]) 

    useEffect(() => {
        getVeggie() // Utilizamos o useEffect pois assim que o aplicativo carregar ira montar esse componente na TELA
    },[])

    const getVeggie = async () => { //Fazemos ASYNC pois devemos ter CRTZ de que teremos os dados antes de renderizar qualquer coisa
      
          const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`) //Como queremos 9 receitas devemos setar esse valor no FETCH
          const data = await api.json() //Iso ira retornar os valores dos dados em JSON para que assim possamos MANIPULAR OS DADOS
          
          setVeggie(data.recipes) //Usando o set, iremos Puxar os objetos de dentro da ARRAY para que possamos renderizarlo no RETURN
          console.log(data.recipes) //Usamos esse console para poder ver as propriedade dentro do DATA para posteriormente usar no nosso RETURN
      }
      
    return(
            <div>
            <Wrapper>
                <h3>Vegan Recipes</h3>
                <Splide
                 options={{
                 perPage: 3, //Fara com q apareça 4 slides na pagina
                 arrows: false, //Vai tirar as setas dos slides
                 pagination: false, //Vai tirar as bolinhas que ficam abaixo do slide
                 drag: "free", //Vai fazer com que o usuario possa puxar livremente
                 gap: "5rem",
                }}
                >
                    {veggie.map((recipe) => { // Na C.L 38 devemos lembrar sempre de passar uma KEY com ID para nosso componente
                        return(
                            <SplideSlide key={recipe.id}> 
                                <Card>
                                    <Link to={"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>

    )
}

const Wrapper = styled.div`
 margin: 4rem 0rem;
 margin: 2% 9%;
`;

const Card = styled.div`
 margin-top: 1rem;
 margin-bottom: 1rem;
 min-height: 25rem;
 border-radius: 1rem;
 overflow: hidden;
 position: relative;
 cursor: pointer;
 box-shadow: rgba(0, 0, 0, 0.5) 0px 7px 10px 0px;


 img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
 }

 p{
    position: absolute;
    color: white;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
 }
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
` ;