import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import MoviesList from "./Components/MoviesList/MoviesList.jsx";
import MoviesDescription from "./Components/MoviesDescription/MoviesDescription.jsx";

function App() {
  return (
    <>
      <Navbar />
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
