import darkSearchIcon from "../img/darkSearch.png";
import whiteSearchIcon from "../img/whiteSearch.png";

const Search = ({ isDark, style, changeName }) => {
  const handleInput = (e) => {
    changeName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={isDark ? style.dark : ""} onSubmit={handleSubmit}>
      <div>
        {isDark ? (
          <img src={whiteSearchIcon} alt="Search" />
        ) : (
          <img src={darkSearchIcon} alt="Search" />
        )}
        <input
          type="search"
          placeholder="Search for a country..."
          onInput={handleInput}
        />
      </div>
    </form>
  );
};

export default Search;
