const Filter = ({ isDark, style, changeRegion }) => {
  const handleRegion = (e) => {
    changeRegion(e.target.value);
  };

  return (
    <select
      defaultValue={"DEFAULT"}
      className={isDark ? style.dark : ""}
      onChange={handleRegion}
    >
      <option value="DEFAULT" disabled hidden>
        Filter by Region
      </option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Filter;
