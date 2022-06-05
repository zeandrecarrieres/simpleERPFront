import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { MeuContexto } from "../components/Context/MeuContexto"

function Private({ children }: { children: JSX.Element } ) {
const { logado, setLogado } = useContext(MeuContexto)

    const location = useLocation()
  

    if (!logado && location.pathname != "/login") {
        return <Navigate to="/login" replace/>
    } else {
        return children
    }    
          
}

export default Private