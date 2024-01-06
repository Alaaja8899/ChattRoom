import React, { createContext, useContext, useEffect, useState } from 'react'
export const chatContext= createContext()

export default function ChatContextProvider({children}) {
    const [signed , setSigned] =useState(false)
    const CheckAuth =()=>{
        const isAuth = Boolean(localStorage.getItem("auth"));
    setSigned(isAuth);
    }
    const SignOut=()=>{
        localStorage.clear()
        CheckAuth()
    }
    useEffect(()=>{
            CheckAuth();
    
    } , [])
 

    const ContextValue = {signed , SignOut , CheckAuth}
    return (
    <chatContext.Provider value={ContextValue}>
        {children}
    </chatContext.Provider>
  )
}


export const  useChattContext=()=>{
        return useContext(chatContext);
}