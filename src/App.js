import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
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
