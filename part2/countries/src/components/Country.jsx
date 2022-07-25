import React, { useState } from "react";

const Country = ({ info, showByDefault }) => {
  const { name, languages, flags, area, population, capital } = info;
  const [show, setShow] = useState(false);

  const language = Object.values(languages);

  return (
    <div>
      <span>
        <b>{name.common}</b>
      </span>
      {showByDefault || show ? (
        <>
          <p>capital: {capital[0]}</p>
          <p>area: {area}</p>
          <p>population: {population}</p>
          <h4>Languages:</h4>
          <ul>
            {language.map((lang, langIndex) => (
              <li key={`${lang}-lang-${langIndex}`}>{lang}</li>
            ))}
          </ul>
          <img src={flags.png} style={{ width: "5rem" }} alt="country-info" />
        </>
      ) : (
        <span>
          <button onClick={() => setShow(true)}>show</button>
        </span>
      )}
    </div>
  );
};

export default Country;
