import "./MovieDescFunction.css";

export default function MovieDescFunction() {
  return (
    <div
      className="card p-0 d-flex justify-content-start align-items-start "
      style={{
        border: "none",
        borderRadius: "0px",
        backgroundColor: "transparent",
        borderBottom: "1px solid #353535",
      }}
    >
      <div className="d-flex justify-content-start align-items-center">
        <img
          src="https://picsum.photos/200"
          width="100%"
          height={100}
          style={{ fitObject: "cover", margin: "0" }}
          alt="Profile Picture"
          className="profile-pic ms-0 my-0"
        />
        <div className="ps-4">
          {/* movie name */}
          <h5 className="profile-name p-0  m-0 text-white">Inception</h5>

          {/* when released */}
          <p
            className="profile-name p-0 mt-2  m-0 text-white"
            style={{ fontSize: "12px" }}
          >
            16-july-2010
          </p>

          {/* movie type */}
          <p
            className="profile-name p-0 mt-2  m-0 text-white"
            style={{ fontSize: "12px" }}
          >
            Action,Adventure
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-start align-items-center flex-column w-75 mx-auto p-3 mt-3" 
      style={{  
        borderRadius: "15px",
        backgroundColor: "#293335",
      }}>
        <div>
        <span class="fa fa-star checked ps-2"></span>
        <span class="fa fa-star checked ps-2"></span>
        <span class="fa fa-star checked ps-2"></span>
        <span class="fa fa-star checked ps-2"></span>
        <span class="fa fa-star checked ps-2"></span>
        <span class="fa fa-star checked ps-2"></span>
        <span class="fa fa-star checked ps-2"></span>
        <span class="fa fa-star checked ps-2"></span>
        <span class="fa fa-star checked ps-2"></span>
        <span class="fa fa-star checked ps-2"></span>
        </div>
        

        <button style={{
            width:"80%",
            backgroundColor: "#5a37d1",
            color: "white",
            padding: "5px 18px",
            border: "none",
            borderRadius: "15px",
        }}>Add to list</button>
      </div>
    </div>
  );
}
