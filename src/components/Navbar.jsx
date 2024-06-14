import { WebButton } from "./WebButton"

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light pt-3">
                <div className="container">
                    <a className="navbar-brand" href=""><img src="images/F.png" className="nav-logo-bg p-1 rounded-2" alt="" /><img src="images/oodi.png" alt="" className="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center " id="mynavbar">
                        <ul className="navbar-nav ms-auto d-flex gap-5 nav-ul me-lg-4">
                            <li className="nav-item">
                                <a className="text-dark fw-semibold text-decoration-none" href="">Home</a>
                            </li>
                            <li className="nav-item nav-drop">
                                <div className="dropdown">
                                    <a className=" text-decoration-none text-dark fw-semibold" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                        <i className="fa-solid fa-angle-down nav-drop-toggle ms-1"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item active" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item nav-drop">
                                <div className="dropdown">
                                    <a className=" text-decoration-none text-dark fw-semibold" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                        <i className="fa-solid fa-angle-down nav-drop-toggle ms-1"></i>

                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item active" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item" >
                                <a className="text-decoration-none text-dark fw-semibold" href="">Offers</a>
                            </li>
                        </ul>
                        <div className="d-flex gap-4 mx-5 justify-content-center my-4">
                            <i className="fa-solid fa-magnifying-glass fs-4"></i>
                            <i className="fa-solid fa-bag-shopping fs-4 position-relative"> <a href="" className="position-absolute nav-eight-position rounded-circle text-light text-decoration-none">8</a></i>
                        </div>
                        <WebButton />


                    </div>
                </div>
            </nav>
        </>)
}