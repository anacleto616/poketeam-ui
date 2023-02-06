import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { pokeApi } from '../libraries/axios';
import { PokemonDetailType } from '../types/PokemonDetailType';

const PokemonDetails = () => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailType>();

  const { id } = useParams();

  const correctId = id?.charAt(0);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    (async () => {
      await pokeApi.get<PokemonDetailType>(`/${correctId}`)
        .then(response => setPokemonDetail(response.data))
        .catch(error => console.log(error));
    })();
  }, []);

  return (
    <section className="max-w-5xl w-full mx-auto mb-0 mt-5 flex flex-col flex-wrap items-center justify-center">
      <div className="w-1/3 flex flex-col items-center justify-center mx-2 mb-6">
        <img
          className="bg-gray-100 w-full"
          src={pokemonDetail?.sprites?.other?.['official-artwork'].front_default}
          alt={pokemonDetail?.name}
        />
        <span>{pokemonDetail?.id}</span>
        <span className='text-[#313131] font-semibold text-xl'>{pokemonDetail?.name}</span>
        <div className="w-full flex items-center justify-around">
          {pokemonDetail?.types.map((pokemonDetailType) => (
            <span key={pokemonDetailType.slot}>
              {pokemonDetailType.type.name}
            </span>
          ))}
        </div>
      </div>
      <button onClick={goToHome} className='bg-teal-500 rounded-md p-2 w-1/5'>
        voltar
      </button>
    </section>
  );
};

export default PokemonDetails;
