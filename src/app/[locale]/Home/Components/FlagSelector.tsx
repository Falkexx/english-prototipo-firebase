'use client'

import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import DropDownIcon from '@/Midias/Icons/Dropdown.svg';
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import nookies from "nookies"; // Importando o nookies

const countries = [
  { code: "US", name: "", locale: "en" },
  { code: "BR", name: "", locale: "pt" },
];

interface countriesProps {
  code: string;
  name: string;
  locale: string;
}

function CountrySelect() {

  
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const pathName =  window.location.pathname;

  const handleSelect = (country: countriesProps) => {
    setSelectedCountry(country);
    setIsOpen(false); // Fecha o dropdown após selecionar

    // Atualiza o cookie NEXT_LOCALE usando nookies
    nookies.set(null, "NEXT_LOCALE", country.locale, {
      maxAge: 30 * 24 * 60 * 60, // O cookie expira em 30 dias
      path: "/",
    });

    // Atualiza a URL com o novo idioma no path
    const newPath = pathName.replace(`/${locale}`, `/${country.locale}`);
    router.push(newPath); // Roteia para a nova URL com o idioma alterado
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Abre ou fecha o dropdown
  };

  useEffect(()=>{
    if(locale == 'en'){

      setSelectedCountry(countries[0])
    }else{
      setSelectedCountry(countries[1])
    }
  },[])
  
  return (
    <div style={{ position: "relative", width: "100px" }}>
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
        <span>
          {isOpen ? <Image src={DropDownIcon} alt="dropdown" /> : <Image src={DropDownIcon} alt="dropdown" />}
        </span> {/* Ícone de dropdown */}
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
              <span style={{ marginLeft: "10px" }}>{country.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountrySelect;
