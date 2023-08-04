import { useState, useEffect } from "react"

import { Navigate } from "react-router-dom"

import { auth } from '../firebaseConnection'
import { onAuthStateChanged } from "firebase/auth"

export default function Private({children}) {
    const [loading, setLoading] = useState(true) //De inicio começa com TRUE pois ao abrir estara carregando
    const [signed, setSigned] = useState(false) // De inicio começa com FALSE pois ao abrir nao estara logado

    useEffect(() => { //Usamos o useEffect pois devemos fazer a verificaçao se o usuario esta logado assim que carregar o componente
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user) => {

                //Se tem USER LOGADO
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }

                    localStorage.setItem("@detailUser", JSON.stringify(userData))

                    setLoading(false)
                    setSigned(true)
                }
                // Se nao tem user logado
                else{
                    setLoading(false)
                    setSigned(false)
                }
            })

        }

        checkLogin()
    }, [])

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed){ //Se nao estiver logado ira ser redirecionado para HOME
        return <Navigate to= "/"/> 
    }

    return children //Se estiver logado ira retornar o CHILDREN que nesse caso é o ADMIN 
}