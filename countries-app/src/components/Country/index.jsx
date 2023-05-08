import { Link } from "react-router-dom";
import style from "./country.module.scss";

const Country = ({
  isDark,
  name,
  flags,
  population,
  region,
  capital,
  cca3,
}) => {
  return (
    <Link
      to={`/countries/${cca3}`}
      className={`${style.country} ${isDark ? style.dark : ""}`}
    >
      <img src={flags.svg} alt={flags.alt} />
      <div className={style.info}>
        <h3>{name.common}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString()}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
};

export default Country;
