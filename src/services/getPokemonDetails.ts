import { PokemonListType } from '../types/ListPokemonsType';
import { PokemonDetailType } from '../types/PokemonDetailType';
import { pokeApi } from './../libraries/axios';

export async function getPokemonsDetails(pokemons: PokemonListType[]): Promise<PokemonDetailType[]> {
  const pokemonsDetails: PokemonDetailType[] = [];

  for (const pokemon of pokemons) {
    const response = await pokeApi.get<PokemonDetailType>(`/${pokemon.name}`);
    pokemonsDetails.push(response.data);
  }

  return pokemonsDetails;
}
