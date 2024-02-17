import { createContext, useEffect, useState } from "react";
import GET from "../Services/GET";

export const MyContext=createContext() //1. вот это хранилище. Сначала но пустое


export function MyContextComponent({children}) {
    const [dataServer, setDataServer]=useState(false)

    const value={dataServer, setDataServer}

    useEffect(()=>{
        getUsersServer()
      }, []) //может запуститься только 1 раз, так как useEffectу передали второй атрибут, и теперь это componentDidMount, который запускается только 1 раз при монтаже, когда запустили приложени

    async function getUsersServer() {
        const usersServer = await GET.getUsers() //getUsers -это ф-ция с GET
        setDataServer(usersServer)
      }

    if (!dataServer) {
  return <h1>Loading...</h1>
}


    return (
        <MyContext.Provider value={value}>
{children}
        </MyContext.Provider>
    ) //2. Затем прогружается этот компонент. Он вызывает провайдер кнтекста и складывает туда value. Но он не сработает, пока не сработает useEffect
}