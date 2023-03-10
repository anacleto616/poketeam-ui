import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonsDetails } from '../services/getPokemonDetails';
import { listPokemons } from '../services/listPokemons';
import { PokemonListType } from '../types/ListPokemonsType';
import { PokemonDetailType } from '../types/PokemonDetailType';

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonListType[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailType[]>([]);

  useEffect(() => {
    (async () => {
      await listPokemons()
        .then((response) => setPokemons(response.results))
        .catch(error => console.log(error));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await getPokemonsDetails(pokemons)
        .then(response => setPokemonDetails(response))
        .catch(error => console.log(error));
    })();
  }, [pokemons]);

  return (
    <section className="max-w-5xl w-full mx-auto mb-0 mt-4 flex flex-wrap items-center justify-center">
      {pokemonDetails?.map((pokemon) => (
        <Link to={`/pokemons/${pokemon.id}}`} key={pokemon.id} className="w-1/5 flex flex-col items-center justify-center mx-2 mb-12">
          <img
            className="bg-gray-100 w-full"
            src={pokemon?.sprites?.other?.['official-artwork'].front_default}
            alt={pokemon?.name}
          />
          <span>{pokemon?.id}</span>
          <span className='text-[#313131] font-semibold text-xl'>{pokemon?.name}</span>
          <div className="w-full flex items-center justify-around">
            {pokemon.types.map((pokemonType) => (
              <span key={pokemonType.slot}>
                {pokemonType.type.name}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Home;
