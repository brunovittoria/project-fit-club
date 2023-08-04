import { useEffect, useState } from "react"


export default function Popular(){

    const [popular, setPopular] = useState([]) //Resumidamente usamos o useState aqui para armazenar dados da nossa api. O useState aqui atua como uma variavel que diferente de outras variaveis ele consegue atualizar os valores do DATA caso hajam atualizacoes la dentro

    useEffect(() => {
        getPopular() // Utilizamos o useEffect pois assim que o aplicativo carregar ira montar esse componente na TELA
    },[])

    const getPopular = async () => { //Fazemos ASYNC pois devemos ter CRTZ de que teremos os dados antes de renderizar qualquer coisa
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`) //Como queremos 9 receitas devemos setar esse valor no FETCH
      const data = await api.json() //Iso ira retornar os valores dos dados em JSON para que assim possamos MANIPULAR OS DADOS
      setPopular(data.recipes) //Usando o set, iremos Puxar os objetos de dentro da ARRAY para que possamos renderizarlo no RETURN
    }
    return(
        <div>
            {popular.map((recipe) => {
                return( 
                    <div key={recipe.id}>

                     <p>{recipe.title}</p>

                    </div> //Devemos sempre passar IDS para nossas DIVS para que caso o determinado elemento nao esteja mais dentro do nosso ARRAY DATA, sera atualizado AUTOMATICAMENTE
                )
            })}

        </div>
    )
}