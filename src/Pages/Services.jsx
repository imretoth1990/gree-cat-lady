import "../Pages/Pages.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header className="center">
        <h1>{t("Services")}</h1>
      </header>
      <main className="center">
        <p>I do everything!</p>
      </main>
    </div>
  );
};

export default Services;
