import { Footer } from "../components/Footer"
import { Menu } from "../components/Menu"
import { Navbar } from "../components/Navbar"
import { ServicesCard } from "../components/ServicesCard"
import SimpleSlider from "../components/SimpleSlider"
import { WebButton } from "../components/WebButton"

export const Home = () => {
    return (
        <>
            <Navbar />
            {/* Hero start */}
            <section className="hero ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-7 my-5">
                            <h1 className="fw-bold width-30px mb-4 lh-sm mt-4">Dive into Delights Of Delectable <a href="" className="text-decoration-none hero-h1-orange">Food</a></h1>
                            <p className="w-75 mb-5">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                            <div className="d-flex  align-items-center gap-5">
                                <WebButton />
                                <p className="mt-3">Watch Video <a href="" className="rounded-circle video-play p-4 mx-2"><img src="images/video-play.png" className="mb-2" alt="" /></a></p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-sm-5 ">
                            <img className="home-right-food-img" src="images/home-food.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero start */}

            {/* Dishes section start */}
            <section className="">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-sm-12">
                            <h1 className="sec-h4-italic mb-4"><i>Special Dishes</i></h1>
                        </div>
                        <div className="col-12 col-lg-12 col-sm-12 d-flex justify-content-between">
                            <h1>Special Dishes From <br />
                                Our Menu</h1>
                        </div>

                        <div className="row">
                            <SimpleSlider />
                        </div>
                    </div>
                </div>
            </section>
            {/* Dishes section end */}

            {/* Services section start */}
            <section className="web-marg-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-5 my-5">
                            <h1 className="sec-h4-italic mb-4"><i>Our Story & Services</i></h1>

                            <h1 className="fw-bold width-30px mb-4 lh-sm mt-4">Our Culinary Journey And Services</h1>
                            <p className="w-75 mb-5 fw-semibold">Rooted in passion, we curate unforgettable dining <br /> experiences and offer exceptional services, blending <br /> culinary artistry with warm hospitality.</p>
                            <WebButton />

                        </div>
                        <div className="col-12 col-lg-6 col-md-7">
                            <div className="row">
                                <ServicesCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services section end */}
            {/* Morning section start */}
            <section className="web-marg-top morning-sec ">
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-12 col-lg-5 col-md-5  mt-3">
                            <h1 className="sec-h4-italic mb-4 text-light fs-4"><i>New Menu</i></h1>
                            <h1 className="text-light">Morning Sandwich</h1>
                            <p className="text-light pt-3">Start your day with a delicious and energizing morning <br /> sandwich! Made with fresh ingredients. Enjoy classic egg <br /> and cheese or a gourmet twist with avocado and bacon, <br /> perfect for kickstarting your morning.</p>
                        </div>
                        <div className="col-12 col-lg-7 col-md-7">
                            <img src="images/morning-sec-sandwich.svg" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>
            {/* MOrning section end */}


            {/* Testimonials section start */}
            <section className="web-marg-top">
                <div className="container">
                    <div className="row  align-items-center">
                        <div className="col-12 col-lg-6 col-md-5 my-6">
                            <img src="images/chef.png" alt="" className="w-100" />
                        </div>
                        <div className="col-12 col-lg-6 col-md-5  pt-5">
                            <h1 className="sec-h4-italic mb-4"><i>Testimonials</i></h1>
                            <h1 className="mb-3">What Our Customers <br /> Say About Us</h1>
                            <p>“I had the pleasure of dining at Foodi last night, and I'm still <br /> raving about the experience! The attention to detail in <br /> presentation and service was impeccable”</p>
                            <div className="d-flex gap-5 mt-5">
                                <div>
                                    <img src="images/chef-people-1.png" alt="" />
                                    <img src="images/chef-people-2.png" alt="" />
                                    <img src="images/chef-people-3.png" alt="" />
                                </div>
                                <div>
                                    <p className="fs-4 fw-bold mb-2">Customer Feedback</p>
                                    <p className="d-flex gap-3"><span className="fw-bold fs-5"><i class="fa-solid fa-star" style={{ color: "#ffe605" }}></i>4.9</span>
                                        <span className="fs-5" style={{ color: "rgba(128, 126, 126, 1)" }}>(18.6k Reviews)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials section end */}



            {/* Menu section start */}
            <section className="web-marg-top">
                <div className="container menu-sec">
                    <div className="row position-relative">
                        <div className="col-12 col-lg-12 col-md-12">
                            <p className="text-center pt-0 position-absolute top-0 start-50 translate-middle">
                                <h1 className="sec-h4-italic fs-2 mb-3 "><i>THE</i></h1>
                                <h1 className="fw-bold mt-0">Menu</h1>
                                <img src="images/menu-logo.png" className="menu-logo mt-1" alt="menu-img" />
                            </p></div>
                    </div>
                    <div className="">
                        <Menu />
                    </div>


                </div>
            </section>
            {/* Menu section end */}




            {/* Footer section start */}
            <Footer/>
            {/* Footer section end */}

        </>
    )
}


























































