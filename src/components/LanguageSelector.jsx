import { useState } from "react";
import i18n from "../i18n";
import CustomSelect from "./CustomSelect";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const options = [
    { value: "de", label: "Deutsch" },
    { value: "en", label: "English" },
    { value: "hu", label: "Magyar" },
  ];

  const chooseLanguage = (value) => {
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
    localStorage.setItem("selectedValue", value);
  };

  return (
    <div defaultValue={selectedLanguage}>
      <CustomSelect options={options} onChange={chooseLanguage} />
    </div>
  );
};

export default LanguageSelector;
