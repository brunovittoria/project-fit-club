import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';  //Iremos usar para pegar o ID da receita que foi clicada que aparece no URL pra renderizar-la na tela
import './recipe.css'

export default function Recipe() {

    let params = useParams()
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState("instructions") //Iremos usar pra setar estilo no determinado btn que tiver sido clicado e estiver ATIVO

    const fetchDetails = async () => {
        const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        )
        const detailData = await data.json()
        setDetails(detailData)
        console.log(detailData)
    }

    useEffect(() => {
        fetchDetails()
    }, [params.name]) //Usamos params.name pois agira como codependencia, portanto cada atualizacao no params.name a aplicaçao sera atualizada

    
    // Na C.L 35 usamos esse atributo estranho pois serve para renderizar as TAGS HTML dentro do objeto summary
    return(
        <DetailWrapper>
            <div className="image-container-recipe">
                <h2>{details.title}</h2>
                <img src={details.image} alt=""/>
            </div>
            <Info>
                <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</Button>
                <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>

                {activeTab === "instructions" && (
                    <div className="instructions-container-recipe">
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary}}></h3> 
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions}}></h3> 
                    </div>
                )}
                
                {activeTab === "ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    )
}


const DetailWrapper = styled.div`
   width: 100%;
   display: flex;
   padding: 2rem;
   gap: 4rem;

   .image-container-recipe{
    width: 100%;
    max-width: 600px;
    img{
        width: 100%;
    }
   }

   .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
   }

   h2{
    margin-bottom: 2rem;
   }
   
   li{
    font-size: 1.2rem;
    line-height: 2.5rem;
   }
   ul {
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 2;
   }

   @media screen and (max-width: 1024px){
    flex-direction: column;
   }
`;

const Button = styled.button`
   padding: 1rem 2rem;
   color: #313131;
   background: white;
   border: 2px solid black;
   margin-right: 2rem;
   font-weight: 600;
`;

const Info = styled.div`
   max-width: 60%;

   @media screen and (max-width: 1024px){
    max-width: 100%;
    width: 100%;
   }
`;