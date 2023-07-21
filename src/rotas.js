import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conteudo from "./paginas/Conteudo"
import Horarios from "./paginas/Horarios";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Conteudo />}></Route>
                <Route path='/horarios' element={ <Horarios />}></Route>
            </Routes>
        </BrowserRouter>
    )
}