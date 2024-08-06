import { useState } from "react";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [message, setMessage] = useState("");

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", { name, email, telNumber, message });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "4rem" }}>
          <div style={{ display: "inline-flex", marginBottom: "1rem" }}>
            <div style={{ marginRight: "3rem", width: "15rem" }}>
              <label>{t("Name")}</label>
              <input placeholder={t("NamePH")} type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
            </div>
            <div style={{ width: "17rem" }}>
              <label>{t("Email")}</label>
              <input placeholder={t("EmailPH")} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            </div>
          </div>
          <div>
            <label>{t("Tel")}</label>
            <input
              placeholder={t("TelPH")}
              style={{ border: "none", borderBottom: "1px solid grey", height: "2.3rem", width: "34.8rem", backgroundColor: "transparent" }}
              type="tel"
              value={telNumber}
              onChange={(e) => setTelNumber(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label>{t("Message")}</label>
            <textarea
              placeholder={t("MessagePH")}
              className="messageInput"
              type="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button style={{ border: "1px solid #ccc" }} type="submit">
            {t("Submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
