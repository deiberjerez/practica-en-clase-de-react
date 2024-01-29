import { BrowserRouter , Routes , Route   } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

import Contador from "./components/Contador";
import Inicio from "./components/Home";
import Api from "./components/Api"
import Buscar from "./components/Buscar";
import Talent from "./components/Talent"

function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path="/"  Component={Inicio} />
      <Route path="/api"  Component={Api} />
      <Route path="/contador"  Component={Contador}/>
      <Route path="/buscar"  Component={Buscar} />
      <Route path="/talent "  Component={Talent} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;