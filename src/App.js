import Home from './components/Home' /* asi llamamos a Home para verlo en linea */
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ProductCard from './components/productCard';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() { /* Dentro de esta funcion trabajamos para verlo en la Web SIEMPRE IMPORTANDO LOS COMPONENTES */
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer greeting= {"Bienvenido"}/>
      

      <Contador />
      <ProductCard img='' price={1500} title='Prueba'>

        <p>Imagen para probar</p>

        <button className='Boton1' >Agregar al carrito</button>


      </ProductCard>
      
      <Home />             {/* /> es un componente NORMAL   IMPORTAMOS EL HOME JS */}
    </div>
  );
}

export default App;
