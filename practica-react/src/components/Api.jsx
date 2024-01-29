import Axios from "axios"
import { useEffect, useState } from "react"


const url = "https://official-joke-api.appspot.com/random_joke"

function Api() {


const [joke,setJoke]= useState("")

useEffect(() =>{
    Axios.get(url).then((response)=>{
        setJoke(response.data.setup + " " + response.data.punchline)
    }).catch(error => console.error(error))
    
}, [])

  return (
    <div className="container">
     <h1>{joke}</h1>
     </div>
  )
}

export default Api