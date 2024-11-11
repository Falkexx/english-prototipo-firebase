import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

import DropDownIcon from '@/Midias/Icons/Dropdown.svg'
import DropUpIcon from '@/Midias/Icons/Dropdown.svg'


import Image from "next/image";

const countries = [
  { code: "US", name: "United States" },
  { code: "BR", name: "Brazil" },
  { code: "JP", name: "Japan" },
];

interface countriesProps {

  code:string
  name:string
}

function CountrySelect() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);



  const handleSelect = (country:countriesProps) => {
    setSelectedCountry(country);
    setIsOpen(false); // Fecha o dropdown após selecionar
    console.log(selectedCountry)
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Abre ou fecha o dropdown
  };

  return (
    <div style={{ position: "relative", width: "100px" }}>
      {" "}
      {/* Tamanho ajustado */}
      {/* Componente simula o cabeçalho de um select */}
      <div
        onClick={toggleDropdown}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <ReactCountryFlag
          countryCode={selectedCountry.code}
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
        />
        <span>{isOpen ? <Image src={DropDownIcon} alt='dropdown'/> : <Image src={DropDownIcon} alt='dropdown'/>}</span> {/* Ícone de dropdown */}
      </div>
      {/* Dropdown de opções */}
      {isOpen && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            border: "1px solid #ccc",
            borderTop: "none",
            position: "absolute",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1,
          }}
        >
          {countries.map((country) => (
            <li
              key={country.code}
              onClick={() => handleSelect(country)}
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountrySelect;
