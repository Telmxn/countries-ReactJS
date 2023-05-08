import regularMoon from "../../img/moon-regular.svg";
import solidMoon from "../../img/moon-solid.svg";
import style from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ isDark, setIsDark }) => {
  const changeMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className={isDark ? style.dark : ""}>
      <Link to={"/"}>
        <h1>Where in the world?</h1>
      </Link>
      <button className={style.darkMode} onClick={changeMode}>
        {isDark ? (
          <img src={solidMoon} alt="Solid Moon" />
        ) : (
          <img src={regularMoon} alt="Regular Moon" />
        )}
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
