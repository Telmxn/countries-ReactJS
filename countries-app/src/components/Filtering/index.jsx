import Filter from "../Filter";
import Search from "../Search";
import style from "./filtering.module.scss";

const Filtering = ({ isDark, changeRegion, changeName }) => {
  return (
    <div className={`${style.filtering} ${isDark ? style.dark : ""}`}>
      <Search isDark={isDark} style={style} changeName={changeName} />
      <Filter isDark={isDark} style={style} changeRegion={changeRegion} />
    </div>
  );
};

export default Filtering;
