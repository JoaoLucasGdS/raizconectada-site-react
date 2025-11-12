import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./css/RaizHeader.css";
import Logo from "../assets/logo.png";

function RaizHeader({ transparent = false }) {

  const { t } = useTranslation();

  const rootClass = `navbar navbar-expand-lg navbar-dark custom-navbar ${transparent ? "custom-navbar--transparent" : ""}`;

  return (
    <div>
      <nav className={rootClass}>
        <NavLink to="/" className="navbar-brand">
          <img src={Logo} alt="Logo raiz conectada" height="100" />
        </NavLink>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <NavLink
              to="/recipes"
              className={({ isActive }) => `nav-link ${isActive ? "text-success" : ""}`}
            >
              <i className="bi bi-fork-knife fs-3" /> {t("header.recipes")}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/gps"
              className={({ isActive }) => `nav-link ${isActive ? "text-success" : ""}`}
            >
              <i className="bi bi-geo-alt fs-3" /> {t("header.locate")}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/reviews/0"
              className={({ isActive }) => `nav-link ${isActive ? "text-success" : ""}`}
            >
              <i className="bi bi-star fs-3" /> {t("header.reviews")}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/cart"
              className={({ isActive }) => `nav-link ${isActive ? "text-success" : ""}`}
            >
              <i className="bi bi-cart fs-3" /> {t("header.cart")}
            </NavLink>
          </li>

        </ul>

        <ul className="navbar-nav">

          <li className="nav-item">
            <NavLink to="/profile" className="nav-link text-primary custom-nav-link">
              <i className="bi bi-person-circle fs-1" />
            </NavLink>
          </li>

        </ul>

      </nav>
    </div>
  );
}

export default RaizHeader;
