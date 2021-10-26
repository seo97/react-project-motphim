import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Data from "../data/Data.js";

export default function Slides() {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        autoSlide: true,
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
        <div className="slides">
            <Slider {...settings}>
                {Data.map(item => (
                    <div className="slides__item" key={item.id}>
                        <div className="slides__item-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="slides__item-desc">
                            <h3 className="slides__item-title">{item.name}</h3>
                        </div>
                        <div className="slides__item-part">
                            <span className="slides__item-type">Tập {item.parts} Vietsub</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}