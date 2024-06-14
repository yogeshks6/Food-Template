import { Navbar } from "../components/Navbar"
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
                        <div className="col-12 col-lg-6 col-sm-7 my-5">
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
                            <h1>Special Dishes From <br />
                                Our Menu</h1>
                        </div>
                        <div className="col-12 col-lg-12 col-sm-12">
                            <SimpleSlider />
                        </div>
                    </div>
                </div>
            </section>
            {/* Dishes section end */}
        </>
    )
}