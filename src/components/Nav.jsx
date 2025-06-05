import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="container nav-container">
        <div className="nav-title">
          AlertaFácil
        </div>
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/solucao"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Solução
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cadastrar"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Cadastrar
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
