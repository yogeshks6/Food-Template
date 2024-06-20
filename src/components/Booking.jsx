import { WebButton } from "./WebButton"

export const Booking = () => {
    return (
        <>
            <section className="booking-margin pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12 text-center">
                            <h1 className="sec-h4-italic mb-4 fw-normal">Need booking?</h1>
                            <h1 className="fw-bold" style={{ fontSize: 50 }}>Reserve Your Personal <br /> Table Now!</h1>
                        </div>
                        <div>
                            <div className="row mt-5">
                                <div className="col-12 col-lg-6 col-md-6 ">
                                    <div class="input-group flex-nowrap booking-input rounded-pill px-1 bg-white">
                                        <span class="input-group-text bg-white border-0 rounded-pill px-3" id="addon-wrapping"><i class="fa-regular fa-user" style={{color:"#959595"}}></i></span>
                                        <input type="text" class="form-control border-0 rounded-pill py-3" placeholder="Full Name" aria-label="Username" aria-describedby="addon-wrapping"/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 mb-5">
                                    <div class="input-group flex-nowrap booking-input rounded-pill px-1 bg-white">
                                        <span class="input-group-text bg-white border-0 rounded-pill px-3" id="addon-wrapping"><i class="fa-solid fa-user-group" style={{color:"#959595"}}></i></span>
                                        <input type="text" class="form-control border-0 rounded-pill py-3" placeholder="Total Person" aria-label="Username" aria-describedby="addon-wrapping"/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 ">
                                    <div class="input-group flex-nowrap booking-input rounded-pill px-1 bg-white">
                                        <span class="input-group-text bg-white border-0 rounded-pill px-3" id="addon-wrapping"><i class="fa-regular fa-envelope" style={{color:"#959595"}}></i></span>
                                        <input type="text" class="form-control border-0 rounded-pill py-3" placeholder="Email Address" aria-label="Username" aria-describedby="addon-wrapping"/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 mb-5">
                                    <div class="input-group flex-nowrap booking-input rounded-pill px-1 bg-white">
                                        <span class="input-group-text bg-white border-0 rounded-pill px-3" id="addon-wrapping"><i class="fa-solid fa-phone" style={{color:"#959595"}}></i></span>
                                        <input type="text" class="form-control border-0 rounded-pill py-3" placeholder="Phone Number" aria-label="Username" aria-describedby="addon-wrapping"/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 ">
                                    <div class="input-group flex-nowrap booking-input rounded-pill px-1 bg-white">
                                        <span class="input-group-text bg-white border-0 rounded-pill px-3" id="addon-wrapping"><i class="fa-regular fa-user" style={{color:"#959595"}}></i></span>
                                        <input type="text" class="form-control border-0 rounded-pill py-3" placeholder="Time" aria-label="Username" aria-describedby="addon-wrapping"/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 ">
                                    <div class="input-group flex-nowrap booking-input rounded-pill px-1 bg-white">
                                        <span class="input-group-text bg-white border-0 rounded-pill px-3" id="addon-wrapping"><i class="fa-regular fa-user" style={{color:"#959595"}}></i></span>
                                        <input type="text" class="form-control border-0 rounded-pill py-3" placeholder="Full Name" aria-label="Username" aria-describedby="addon-wrapping"/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12 col-md-12 text-center pt-5">
                                    <WebButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
