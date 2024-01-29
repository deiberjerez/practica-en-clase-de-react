import { useState } from "react"

const users = [
  "jaime",
  "deiber",
  "juliana",
  "erny",
  "david",
  "felipe",
  "rios"
]



function Buscar() {
  const [search, setSearch] = useState("")

  const handleBuscar = (name) =>{
    if(name.target.value === ""){
      setSearch(users)
  }

    const filterUsers = users.filter((user) => user.toLowerCase().indexOf(name.target.value.toLowerCase()) !== -1)
    setSearch(filterUsers)
  }
    return (
      <div className="container">
        <h1>opcion BUSCAR</h1>
        <input type="text" name="search" placeholder="buscar usuario" onChange={handleBuscar}/>
        {<h3>resultado de la busqueda: {search}</h3>}
        { <ul>
          {users.map((user, i) =>(
            <li key={i}>{user}</li>
          ))}
        </ul> }
        {
          search && search.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        }
      </div>
    )
  }

  export default Buscar