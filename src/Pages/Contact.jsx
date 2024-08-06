import "../Pages/Pages.css";
import { useTranslation } from "react-i18next";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h1>{t("Contact")}</h1>
      </div>
      <div className="container">
        <div className="contactInfos">
          <img src="/Timi.Cica.png" alt="image" className="contactImage"></img>
          <header>
            <p>{t("ContactText")}</p>
          </header>
          <div className="contactData">
            <h3>{t("ContactName")}</h3>
            <p>Tel: +43 676 4816272</p>
            <p>E-Mail: timea.jokai@gmail.com</p>
          </div>
        </div>
        <div className="form">
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
};

export default Contact;
