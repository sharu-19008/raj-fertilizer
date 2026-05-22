import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../assets/images/slide3.png";
import poster1 from "../assets/images/slide2.png";
import field from "../assets/images/slide1.jpg";

export default function ImageSlider() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        waitForAnimate: true,
        cssEase: "linear"
    };

    return (
        <div className="w-full h-auto sm:h-50">
            <Slider {...settings}>
                <div className="">
                    <img src={field} alt="A field of crops" className="h-50 w-full md:h-110" />
                </div>
                <div>
                    <img src={poster1} alt="A man throwing fertilizer" className="h-50 w-full md:h-110" />
                </div>
                <div>
                    <img src={banner} alt="Shop Info" className="h-50 w-full md:h-110" />
                </div>
            </Slider>
        </div>
    )
}