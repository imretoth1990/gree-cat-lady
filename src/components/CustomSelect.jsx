import React, { useState, useEffect, useRef } from "react";
import "../components/Navbar/Navbar.css";

const CustomSelect = ({ options, onChange, defaultValue, className, style, selectProps, optionProps, storageKey = "selectedValue" }) => {
  const savedValue = localStorage.getItem(storageKey) || defaultValue || "";
  const [selectedValue, setSelectedValue] = useState(savedValue);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(storageKey, selectedValue);
  }, [selectedValue, storageKey]);

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    handleSelectChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className={`custom-select ${className}`} style={{ position: "relative", ...style }} {...selectProps}>
      <div className="selected-value" onClick={toggleDropdown} style={{ cursor: "pointer" }}>
        {options.find((option) => option.value === selectedValue)?.label || "Select an option"}
      </div>
      {isOpen && (
        <div
          className="options"
          style={{ position: "absolute", top: "100%", left: 0, zIndex: 1, border: "1px solid #ccc", backgroundColor: "#fff", ...optionProps?.style }}
        >
          {options
            .filter((option) => option.value !== selectedValue)
            .map((option) => (
              <div
                key={option.value}
                className="option"
                onClick={() => handleOptionClick(option.value)}
                style={{ padding: "8px", cursor: "pointer", ...optionProps?.style }}
                {...optionProps}
              >
                {option.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
