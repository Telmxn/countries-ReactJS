import { useState } from "react";
import Countries from "../../components/Countries";
import Filtering from "../../components/Filtering";

const allurl =
  "https://restcountries.com/v3.1/all?fields=name,population,flags,capital,region,cca3";

const Home = ({ isDark }) => {
  const [isCustom, setIsCustom] = useState(false);
  const [customUrl, setCustomUrl] = useState("");

  const changeRegion = (region) => {
    setIsCustom(true);
    setCustomUrl(`https://restcountries.com/v3.1/region/${region}`);
  };

  const changeName = (name) => {
    if (name === "") {
      setIsCustom(false);
    } else {
      setIsCustom(true);
      setCustomUrl(`https://restcountries.com/v3.1/name/${name}`);
    }
  };

  return (
    <>
      <Filtering
        isDark={isDark}
        changeRegion={changeRegion}
        changeName={changeName}
      />
      <Countries isDark={isDark} url={isCustom ? customUrl : allurl} />
    </>
  );
};

export default Home;
