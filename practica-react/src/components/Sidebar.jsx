import {Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
    <h1>Sidebar</h1>
    <ul className='list'>
      <Link to="/">Inicio</Link>
      <Link to="/api">API</Link>
      <Link to="/buscar">Buscar</Link>
      <Link to="/contador">Contador</Link>
      <Link to="/talentApp">Talent App</Link>
      
        
    </ul>
    </div>
  )
}

export default Sidebar