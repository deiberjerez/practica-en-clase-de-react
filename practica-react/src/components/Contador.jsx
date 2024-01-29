
import { useState } from 'react'
import Swal from 'sweetalert2'


    
    
const Contador = () => {

    const [count, setCount] = useState(0);

    
    const handleClickRestar = () => {
        if (count === 0) {
          Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          setCount(0);
        } else {
          setCount((count) => count - 1);
        }
      };



  return (

    <div className="container">
        
        
        <div className="card">
          <h1>Contador : {count} </h1>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={handleClickRestar}>count is {count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
  )
}

export default Contador