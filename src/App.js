import Home from './components/Home' /* asi llamamos a Home para verlo en linea */
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Frases from './components/Frases';
import Error from './components/Error';
import Diseños from './components/Diseños';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() { /* Dentro de esta funcion trabajamos para verlo en la Web SIEMPRE IMPORTANDO LOS COMPONENTES */
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>{/* Dejamos NavBar fuera por ahora, este componente envuelve las Route */}


           {/* ROUTE ES EL ENLACE A LAS DIFERENTES SECCIONES */}
          <Route path='/' element={<ItemListContainer greeting='Home donde se muestran los productos' />} />
          <Route path='/category/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/Frases' element={<Frases />} />
          <Route path='/Diseños' element={<Diseños />} />
          <Route path='/Carrito' element={<CartWidget/>}/>
          <Route path='*' element={<Error />} />
        </Routes>






      </BrowserRouter>
    </div>
  );
}


export default App;

