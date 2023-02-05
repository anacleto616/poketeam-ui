import { PokemonListType } from '../types/ListPokemonsType';
import { PokemonDetail } from '../types/PokemonDetail';
import { pokeApi } from './../libraries/axios';

export async function getPokemonsDetails(pokemons: PokemonListType[]): Promise<PokemonDetail[]> {
  const pokemonsDetails: PokemonDetail[] = [];

  for (const pokemon of pokemons) {
    const response = await pokeApi.get<PokemonDetail>(`/${pokemon.name}`);
    pokemonsDetails.push(response.data);
  }

  return pokemonsDetails;
}
