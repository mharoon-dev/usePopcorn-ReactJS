import "./MoviesList.css";
export default function MoviesList() {
  return (
    <>
      <div
        className="offset-1 col-md-4 col-6 px-0 py-2"
        style={{ backgroundColor: "#24292c", borderRadius: "10px" }}
      >
        <div
          className="card d-flex justify-content-start align-items-start "
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
              width={40}
              height={60}
              style={{ fitObject: "cover", margin: "5px" }}
              alt="Profile Picture"
              className="profile-pic ms-4 my-3"
            />
            <div>
              <h6 className="profile-name p-0 ps-1 m-0 text-white">John Doe</h6>
              <p
                className="profile-name p-0 ps-1 m-0 text-white"
                style={{ fontSize: "12px" }}
              >
                2006
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
