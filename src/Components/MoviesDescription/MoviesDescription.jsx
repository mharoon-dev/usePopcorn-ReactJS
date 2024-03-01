import MovieDescFunction from "../MovieDescFunction/MovieDescFunction.jsx";

export default function MoviesDescription() {
  return (
    <>
      <div
        className="col-5 ms-4 p-0"
        style={{ backgroundColor: "#24292c", borderRadius: "10px",
      }}
      >
        <div style={{color:"white", backgroundColor: "#293335" , borderRadius: "10px", boxShadow: "box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.75)",
        webkitBoxShadow: "0px 0px 16px -8px rgba(0,0,0,0.75)",
        mozBoxShadow: "0px 0px 16px -8px rgba(0,0,0,0.75)",
        }}>
          <h6 className="pt-3 ms-2 mb-1 ">MOVIES YOU WATCHED</h6>
          <p className="ms-2 pb-2">10 movies</p>
        </div>

        <MovieDescFunction />

      </div>
    </>
  );
}
