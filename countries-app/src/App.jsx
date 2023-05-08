import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useState } from "react";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main className={isDark ? "dark" : ""}>
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/countries" element={<Home isDark={isDark} />} />
          <Route
            path="/countries/:code"
            element={<CountryDetail isDark={isDark} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
