import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import MoviesList from "./Components/MoviesList/MoviesList.jsx";
import MoviesDescription from "./Components/MoviesDescription/MoviesDescription.jsx";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  useEffect(async () => {
    let res = await fetch("http://www.omdbapi.com/?apikey=5ceed8f2&${search}");
  }, [search]);

  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <MoviesList />
          <MoviesDescription />
        </div>
      </div>
    </>
  );
}

export default App;
