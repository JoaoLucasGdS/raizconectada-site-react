import { NavLink } from "react-router-dom";
import "./RaizHeader.css";
import Logo from "../assets/logo.png";

function RaizHeader({ transparent = false }) {

  const rootClass = `navbar navbar-expand-lg navbar-dark custom-navbar ${transparent ? "custom-navbar--transparent" : ""}`;

  return (
    <div>
      <nav className={rootClass}>
        <NavLink to="/" className="navbar-brand">
          <img src={Logo} alt="Logo raiz conectada" height="100" />
        </NavLink>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link text-primary custom-nav-link">
              <i className="bi bi-person-circle fs-3" />
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/gps"
              className={({ isActive }) => `nav-link ${isActive ? "text-success" : ""}`}
            >
              <i className="bi bi-geo-alt fs-3" /> Localizar
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/reviews"
              className={({ isActive }) => `nav-link ${isActive ? "text-success" : ""}`}
            >
              <i className="bi bi-star fs-3" /> Avaliações
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/cart"
              className={({ isActive }) => `nav-link ${isActive ? "text-success" : ""}`}
            >
              <i className="bi bi-cart fs-3" /> Carrinho
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/form"
              className={({ isActive }) => `nav-link ${isActive ? "text-success" : ""}`}
            >
              <i className="bi bi-chat-dots fs-3" /> Fale Conosco
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default RaizHeader;
