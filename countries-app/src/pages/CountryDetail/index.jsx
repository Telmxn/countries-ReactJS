import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import whiteBack from "../../img/whiteBack.png";
import blackBack from "../../img/blackBack.png";
import style from "./countrydetail.module.scss";

const baseurl = "https://restcountries.com/v3.1/alpha/";
const fields =
  "?fields=flags,name,population,capital,region,subregion,tld,currencies,languages,borders";

const CountryDetail = ({ isDark }) => {
  const { code } = useParams();

  const { data, loading, error } = useFetch(baseurl + code + fields);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error.response.statusText}</div>;
  }

  return (
    <div>
      <Link
        className={`${style.back} ${isDark ? style.darkBack : ""}`}
        to={"/"}
      >
        {isDark ? (
          <img src={whiteBack} alt="Back" />
        ) : (
          <img src={blackBack} alt="Back" />
        )}
        Back
      </Link>
      {data && (
        <div className={`${isDark ? style.dark : ""} ${style.country}`}>
          <img src={data?.flags.svg} alt={data?.flags.alt} />
          <div className={style.about}>
            <h2>{data?.name.common}</h2>
            <div className={style.info}>
              <div className={style.left}>
                <p>
                  <b>Native Name: </b>
                  {Object.values(data.name.nativeName).at(-1).common}
                </p>
                <p>
                  <b>Population: </b>
                  {data.population.toLocaleString()}
                </p>
                <p>
                  <b>Region: </b>
                  {data.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {data.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {data.capital}
                </p>
              </div>
              <div className={style.right}>
                <p>
                  <b>Top Level Domain: </b>
                  {data.tld}
                </p>
                <p>
                  <b>Currencies: </b>
                  {Object.values(data.currencies).map((currency) => {
                    return currency.name + " ";
                  })}
                </p>
                <p>
                  <b>Languages: </b>
                  {Object.values(data.languages).join(", ")}
                </p>
              </div>
            </div>
            <div className={style.borderCountries}>
              <h3>Border Countries:</h3>
              <div className={style.borders}>
                {data.borders.map((border) => {
                  return (
                    <Link
                      to={`/countries/${border}`}
                      key={border}
                      className={isDark ? style.dark : ""}
                    >
                      {border}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
