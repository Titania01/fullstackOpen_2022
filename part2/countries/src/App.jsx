import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [look, setLook] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const foundCountries = countries.filter(
    (country) =>
      country.name.common
        .toLowerCase()
        .trim()
        .indexOf(look.toLowerCase().trim()) > -1
  );

  const countryToSee = look.trim() ? foundCountries : [];

  return (
    <div>
      <form>
        <label htmlFor="name">Find Countries</label>
        <input
          value={look}
          type="text"
          onChange={(e) => setLook(e.target.value)}
        />
      </form>
      <div style={{ paddingTop: "2rem" }}>
        {countryToSee.length === 1 ? (
          <Country info={countryToSee[0]} showByDefault={true} />
        ) : countryToSee.length > 10 ? (
          "Too many matches, specify another filter"
        ) : (
          countryToSee.map((country, index) => (
            <Country key={`country-key-${index}`} info={country} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
