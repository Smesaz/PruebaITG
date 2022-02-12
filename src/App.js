import NavBar from "./components/NavBar"; // barra de avegación
import Form from "./components/Form"; // Componente para los diferentes formularios
import Home from "./components/Home"; // COmponente de la pagina de inicio y de rutas inexistentes
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // permite utilizar SPA con sus diferentes rutas
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route exact path='' element={<NavBar />}>
      <Route path='' element={<Home />}></Route>
      <Route path=':item' element={<Form />}/>
      </Route>
      <Route path='*' element={<NavBar />}>
      <Route path='*' element={<Home />}></Route>
      </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
