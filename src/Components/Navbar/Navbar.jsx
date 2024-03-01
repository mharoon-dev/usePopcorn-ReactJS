import "./Navbar.css"
import logo from "../../assets/logo.png"
export default function Navbar() {
    return (
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid p-1">

            <a class="navbar-brand text-white d-flex justify-content-center align-items-center gap-1 ms-2 me-sm-0 me-auto"><img src={logo} width='20px'  />UsePopcorn</a>
            <form class="d-flex justify-content-end align-items-center" role="search">
                <input class="form-control me-2 me-sm-0 seacrhBar" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div class="d-flex justify-content-end">
                <p class="me-3 text-white text-center m-0 result">Result found: 10</p>
            </div>
        </div>
    </nav>
    )
}
