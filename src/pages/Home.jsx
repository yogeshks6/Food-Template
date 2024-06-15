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
                {/* <img src="images/leafs.png" className="morning-sec-side-img position-absolute top-0 start-0" alt="" /> */}
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
        </>
    )
}