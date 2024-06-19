export const Footer = () => {
    return (
        <>
            <footer >
                <div className="footer-margin position-relative">
                    <img src="images/footer-images.png" className="w-100 footer-upper-img" alt="" />
                </div>

                <div className="footer-bg">
                    <div className="container">
                        <div className="row footer-first-line">
                            <div className="col-12 col-lg-5 col-md-5">
                                <p className="footer-first-line-p lh-sm text-light">Subscribe To Our <br /> Newsletter</p>
                            </div>
                            <div className="col-12 col-lg-7 col-md-7">
                                <div class="input-group mb-3">
                                    <input type="text" class="w-75 border-0 py-3 rounded-pill px-4 fw-bold" placeholder="Type your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button type="button" class="btn webButton webButton rounded-pill text-light fw-semibold border border-0  footer-input-btn my-1"  >Subscribe</button>
                                </div>
                            </div>
                        </div>

                        <div className="footer-second-line">
                            <div className="row d-lg-flex ">
                                <div className="col-12 col-lg-3 col-md-3 mt-3">
                                    <a className="navbar-brand" href=""><img src="images/footer-F.png" className="nav-logo-bg p-1 rounded-2 bg-light footer-logo" alt="" /><img src="images/footer-oodi-logo.png" alt="" className="mx-1" /></a>
                                    <p className="text-light fs-5 mt-4 ">Savor the artistry where every <br /> dish is a culinary <br /> masterpiece</p>
                                    <p className="d-flex gap-4 footer-social text-light mt-4">
                                        <i class="fa-brands fa-facebook-f fs-3 text-center py-3"></i>
                                        <i class="fa-brands fa-instagram fs-3 text-center py-3"></i>
                                        <i class="fa-brands fa-twitter fs-3 text-center py-3"></i>
                                        <i class="fa-brands fa-youtube fs-3 text-center py-3"></i>
                                    </p>
                                </div>
                                <div className="col-12 col-lg-2 col-md-2 text-light ps-lg-5">
                                    <p className="fs-4 fw-semibold">Useful links</p>
                                    <ul className="list-unstyled fs-5 mt-4">
                                        <li className="mb-3">About us</li>
                                        <li className="mb-3">Events</li>
                                        <li className="mb-3">Blogs</li>
                                        <li className="mb-3">FAQ</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-2 col-md-2 text-light ps-lg-5">
                                    <p className="fs-4 fw-semibold">Main Menu</p>
                                    <ul className="list-unstyled fs-5 mt-4">
                                        <li className="mb-3">Home</li>
                                        <li className="mb-3">Offers</li>
                                        <li className="mb-3">Menus</li>
                                        <li className="mb-3">Reservation</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-5 col-md-5 text-light ps-lg-5">
                                    <p className="fs-4 fw-semibold">Contact Us</p>
                                    <ul className="list-unstyled fs-5 mt-4">
                                        <li className="mb-3"><i class="fa-solid fa-location-dot me-2"></i>371 7th Ave, New York, NY 10001</li>
                                        <li className="mb-3"><i class="fa-solid fa-phone me-2"></i>+64 958 248 966</li>
                                        <li className="mb-3"><i class="fa-solid fa-envelope me-2"></i>example@email.com</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="text-center mt-5 text-light">
                        <hr />
                        <p className="py-5">Copyright &copy; 2024 Dscode | All rights reserved</p>
                    </div>
                </div>

            </footer>
        </>
    )
}
