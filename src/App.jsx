
import '../src/Style/App.css'
import ListUsers from './Pages/ListUsers'
// import GET from './Services/GET'
// import { useState,useEffect } from 'react'

function App() {
// const [users,setUsers]=useState (false)

// useEffect(()=>{
//   getUsersServer()
// }, []) //может запуститься только 1 раз, так как useEffectу передали второй атрибут, и теперь это componentDidMount, который запускается только 1 раз при монтаже, когда запустили приложение

// async function getUsersServer() {
//   const usersServer = await GET.getUsers() //getUsers -это ф-ция с GET
//   setUsers(usersServer)
// }

// if (!users) {
//   return <h1>Loading...</h1>
// }

// return (
//   <>
//     <ListUsers 
//     items={users}/>
//   </>
// )

  return (
    <>
      <ListUsers/>
    </>
  )
}

export default App
