export type PokemonListType = {
  name: string;
  url: string;
}

export type ListPokemonsType = {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonListType[];
}
