import useFetch from "../../hooks/useFetch";
import Country from "../Country";
import style from "./countries.module.scss";

const Countries = ({ isDark, url }) => {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return (
      <div className={isDark ? style.darkError : ""}>
        {error.response.statusText}
      </div>
    );
  }

  return (
    <div className={style.countries}>
      {data?.map((country) => {
        return <Country {...country} key={country.cca3} isDark={isDark} />;
      })}
    </div>
  );
};

export default Countries;
