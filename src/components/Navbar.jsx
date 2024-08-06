import "./Navbar.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          GreenCatLady
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/about">
              <div>{t("About")}</div>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <div>{t("Services")}</div>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <div>{t("Contact")}</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;
