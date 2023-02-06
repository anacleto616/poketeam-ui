import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import PokemonDetails from '../pages/PokemonDetails';
import PokeTeams from '../pages/PokeTeams';
import RegisterPokeTeams from '../pages/RegisterPokeTeams';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/pokemons/:id' element={<PokemonDetails />} />
          <Route path='/register-poketeam' element={<RegisterPokeTeams />} />
          <Route path='/poketeams' element={<PokeTeams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
