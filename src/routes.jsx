import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Jornada from "./Pages/Jornada";
import Sobre from "./Pages/Sobre";
import Habilidades from "./Pages/Habilidades";
import Contato from "./Pages/Contato";
import ProjetoDia from "./Pages/ProjetoDia";
import Calculadora from "./Pages/Calculadora/Calculadora";
import Login from "./Pages/Login"

function AppRoutes(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="Home" element= {<Home/>}></Route>
            <Route path="Sobre" element={ <Sobre/>}></Route>
            <Route path="Jornada" element={ <Jornada/> }></Route>
            <Route path="Habilidades" element={ <Habilidades/> }></Route>
            <Route path="Contato" element={ <Contato/> }></Route>
            <Route path="ProjetoDia" element={ <ProjetoDia/>}></Route>
            <Route path="Calculadora" element={ <Calculadora/> }></Route>
            <Route path="Login" element={ <Login/> }></Route>

        </Routes>
    
    </BrowserRouter>

    )

}
    export default AppRoutes
