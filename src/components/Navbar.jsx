import "./Navbar.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

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
            <a href="/about">{t("About")}</a>
          </li>
          <li>
            <a href="/services">{t("Services")}</a>
          </li>
          <li>
            <a href="/contact">{t("Contact")}</a>
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
