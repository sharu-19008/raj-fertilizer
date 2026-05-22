import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../assets/images/banner.png";
import poster1 from "../assets/images/poster1.png";

export default function ImageSlider() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        waitForAnimate: true,
        cssEase: "linear"
    };

    return (
        <div className="w-full h-auto">
            <Slider {...settings}>
                <div className="">
                    <img src={banner} alt="logo" className="h-50 w-full md:h-110" />
                </div>
                <div>
                    <img src={poster1} alt="bg" className="h-50 w-full md:h-110" />
                </div>
                <div>
                    <img src={banner} alt="banner" className="h-50 w-full md:h-110" />
                </div>
            </Slider>
        </div>
    )
}