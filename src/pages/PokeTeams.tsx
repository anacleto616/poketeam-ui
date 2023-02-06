import { useEffect, useState } from 'react';
import { poketeamApi } from '../libraries/axios';
import { FiTrash2 } from 'react-icons/fi';
import { getPoketeams } from '../services/getPoketeams';
import { PokeTeamType } from '../types/PoketeamType';

const PokeTeams = () => {
  const [poketeams, setPoketeams] = useState<PokeTeamType[]>([]);

  const deleteTeam = async (id: string) => {
    const beDeleted = confirm('Deseja realmente excluir este cliente?');

    if (beDeleted) {
      await poketeamApi.delete(`/poketeams/${id}`);
      alert('Cliente excluído com sucesso!');
      return;
    }

    return;
  };


  useEffect(() => {
    (async () => {
      await getPoketeams().then(response => setPoketeams(response));
    })();
  }, [poketeams]);

  return (
    <>
      <h1 className='flex items-center justify-center mb-8 mt-4 text-4xl font-semibold'>Lista de times pokemon:</h1>
      <div className='w-full flex justify-around flex-wrap'>
        {poketeams?.map((poketeam) => (
          <div key={poketeam.id} className='bg-gray-300 flex flex-wrap flex-col items-center justify-between w-60 mx-2 mb-12'>
            <h2 className='mb-2 mt-2 font-bold text-2xl'>{poketeam.name}</h2>
            {poketeam.pokemons.map((pokemon, index) => (
              <div key={index} className="text-lg">
                {pokemon}
              </div>
            ))}
            <div className="flex justify-around w-full mt-4 mb-3">
              <button
                className="bg-red-600 text-gray-200 flex justify-around items-center w-24 font-medium p-2 rounded hover:bg-red-500 active:bg-red-700"
                onClick={() => deleteTeam(poketeam.id)}
              >
                <FiTrash2 />
                <span>Excluir</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokeTeams;
