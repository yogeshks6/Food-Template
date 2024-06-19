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
                    </div>
                </div>
            </footer>
        </>
    )
}
