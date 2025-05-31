import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4 container mx-auto">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/solucao" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
            Solução
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink to="/cadastrar" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
            Cadastrar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
