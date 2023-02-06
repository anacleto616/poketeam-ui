import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { poketeamApi } from '../libraries/axios';
import { FiTrash2 } from 'react-icons/fi';

type PokemonType = {
  pokemon: string;
}

type FormValues = {
  name: string
  pokemons: PokemonType[];
};

const validationCustomer = yup.object().shape({
  name: yup.string().required('Nome obrigatório!'),
  pokemons: yup.array().of(yup.string()).required('Insira ao menos um pokemon!').max(6).min(1)
});

const RegisterPokeTeams = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(validationCustomer) });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'pokemons',
  });

  const add = () => {
    append({
      pokemon: ''
    });
  };

  const createTeam = async (data: FieldValues) => {
    try {
      await poketeamApi.post('/poketeams', data);

      alert('Time cadastrado com sucesso!');

      reset();
    } catch (error) {
      console.log(error);
      alert('Falha ao cadastrar o time!');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto mt-4 mb-6 w-3/4 p-4 bg-gray-200 rounded-md">
      <form onSubmit={handleSubmit(createTeam)} className="w-full">
        <div className="flex flex-col mb-3">
          <label className="font-medium text-base w-1/6">Nome do time:</label>
          <input
            className="p-1 w-1/3 max-md:w-full border border-emerald-700 rounded-sm"
            type="text"
            {...register('name')}
            placeholder="Nome do time"
          />
          <p className="text-red-600 font-semibold">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col mb-3">
          <label className="font-medium text-lg w-1/6">Pokemons:</label>
          {fields.map((pokemon, index) => (
            <div key={pokemon.id} className="flex w-1/2 items-center mb-3">
              <div>
                <input
                  className="p-1 w-10/12 border border-emerald-700 rounded-sm"
                  type="text"
                  {...register(`pokemons.${index}`)}
                  placeholder="Digite o nome do pokemon"
                />
                <p className="text-red-600 font-semibold">
                  {errors.pokemons?.message}
                </p>
              </div>

              <button onClick={() => remove(index)} className="mx-3 bg-red-500 rounded p-2">
                <FiTrash2 />
              </button>
            </div>
          ))}
          <div className="mt-2">
            <button onClick={ add } className="bg-blue-500 p-2 text-xs font-medium rounded">
                + Adiconar pokemon
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center m-auto">
          <button
            className="bg-emerald-400 px-2 py-3 rounded font-bold text-sm hover:bg-emerald-500 w-1/4 max-md:w-3/4"
            type="submit"
          >
              Cadastrar Time
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPokeTeams;
