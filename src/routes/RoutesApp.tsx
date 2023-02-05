import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PokemonDetails from '../pages/PokemonDetails';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons/:id' element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
