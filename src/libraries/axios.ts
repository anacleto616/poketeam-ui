import axios from 'axios';

export const poketeamApi = axios.create({
  baseURL: 'http://localhost:3333',
});

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
});
