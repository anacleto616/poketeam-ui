import { PokeTeamType } from '../types/PoketeamType';
import { poketeamApi } from './../libraries/axios';

export async function getPoketeams(): Promise<PokeTeamType[]> {
  const response = await poketeamApi.get<PokeTeamType[]>('/poketeams');

  return response.data;
}
