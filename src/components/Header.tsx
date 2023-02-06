import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-300 h-16 p-12 w-full flex items-center justify-around max-md:flex-col">
      <Link to={'/'} className="font-medium text-black">Home</Link>
      <Link to={'/poketeams'} className="font-medium text-black">Times Pokemon</Link>
      <Link to={'/register-poketeam'} className="font-medium text-black">Cadastrar Times Pokemon</Link>
    </div>
  );
};

export default Header;
