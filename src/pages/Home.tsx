import { useEffect, useState } from 'react';
import { getPokemonsDetails } from '../services/getPokemonDetails';
import { listPokemons } from '../services/listPokemons';
import { PokemonListType } from '../types/ListPokemonsType';
import { PokemonDetail } from '../types/PokemonDetail';

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonListType[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>([]);

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
  }, []);

  return (
    <section className="max-w-5xl w-full mx-auto my-0 flex flex-wrap items-center justify-center">
      {pokemonDetails?.map((pokemon) => (
        <div key={pokemon.id} className="w-1/5 flex flex-col items-center justify-center mx-2 mb-12">
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
        </div>
      ))}
    </section>
  );
};

export default Home;
