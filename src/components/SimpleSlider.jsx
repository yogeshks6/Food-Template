import React from "react";
import Slider from "react-slick";
import { FoodCard } from "./FoodCard";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}
function SimpleSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <FoodCard />
                </div>
                <div>
                    <FoodCard />
                </div>
                <div>
                    <FoodCard />
                </div>
                <div>
                    <FoodCard />
                </div>
                <div>
                    <FoodCard />
                </div>
                <div>
                    <FoodCard />
                </div>
                <div>
                    <FoodCard />
                </div>
                <div>
                    <FoodCard />
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;
