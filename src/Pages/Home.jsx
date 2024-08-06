import "../Pages/Pages.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="center">
      <header>
        <h1>Green Cat Lady</h1>
      </header>
      <main className="center">
        <p>{t("HomeText")}</p>
      </main>
    </div>
  );
};

export default Home;
