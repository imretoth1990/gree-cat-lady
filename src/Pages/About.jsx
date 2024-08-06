import "../Pages/Pages.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="center">
      <header>
        <h1>{t("About")}</h1>
      </header>
      <main className="center">
        <p>Hi, i am Timi!</p>
      </main>
    </div>
  );
};

export default About;
