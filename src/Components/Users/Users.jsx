import { useContext } from "react"
import { MyContext } from "../../Context/MyContext"

export default function Users() {

//достаем данные из MyContext
const {dataServer,setDataServer}=useContext(MyContext);

//удаляем элемент по которому кликнули
function delElement(id) {
    const filterData=dataServer.filter((user)=>user.id!==id) //если юзер айди не равен этому конкретному айди (на который нажали), то элемент остается в списке, попадаешь в новый массив
    setDataServer(filterData)
}
return (
  <div>
      {dataServer.map(data=>{
          return(
              <div 
              key={data.id} 
              style={{marginBottom: "20px"}}
              onClick={()=>{delElement(data.id)}}
              >
                  <h1>{data.name}</h1>
                  <h3>{data.email}</h3>
                  <h3>{data.website}</h3>
              </div>
          )
      })}
  </div>
)

//   return (
//     <div>
//         {items.map(data=>{
//             return(
//                 <div key={data.id} style={{marginBottom: "20px"}}>
//                     <h1>{data.name}</h1>
//                     <h3>{data.email}</h3>
//                     <h3>{data.website}</h3>
//                 </div>
//             )
//         })}
//     </div>
//   )
}
