import { pokeApi } from './../libraries/axios';
import { ListPokemonsType } from './../types/ListPokemonsType';

export async function listPokemons(): Promise<ListPokemonsType> {
  const response = await pokeApi.get<ListPokemonsType>('');

  return response.data;
}
