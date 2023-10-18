import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from 'keen-slider'
import "./Carousal.css";

const Carousal = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            origin: "center",
            perView: isMobile ? 1 : 2.5,
            spacing: 10,
        },
        range: {
            min: -5,
            max: 5,
        },
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="py-12">
            <div className="w-full ">
                <div>
                    <h1 className="lg:text-5xl text-3xl text-center font-bold text-[#7D0F0F] py-5 mx-auto">"Unlock Your Potential with Us"</h1>
                    <p className="w-4/5 lg:w-1/2 mx-auto pb-7 lg:text-xl">At <span className="text-[#7D0F0F] font-bold"> EduTech Connect</span >, we believe that learning is a lifelong journey, and we're here to guide you every step of the way. Our platform is designed to empower you with knowledge, inspire your curiosity, and help you achieve your academic and career goals.</p>
                </div>
                
            </div>
            <div className="container w-full center ">
                {/* This is the container for the Keen Slider */}
                <div ref={sliderRef} className="keen-slider">

                    <div className="keen-slider__slide number-slide1 p-4 md:p-0 card-body">
                        <div className="main">
                            <ul className="cards">
                                <li className="cards_item" id="item_salad">
                                    <div className="card">
                                        
                                        <div className="card_image">
                                            <img
                                                src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                                                alt="mixed vegetable salad in a mason jar."
                                            />
                                        </div>
                                        <div className="card_content">
                                            <h2 className="card_title">Farmstand Salad</h2>
                                            <div className="card_text">
                                                
                                                <p>
                                                    Served with your choice of dressing on the side: housemade ranch, cherry balsamic vinaigrette, creamy chipotle, avocado green goddess, or honey mustard. Add your choice of protein for $2 more.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">2</div>
                    <div className="keen-slider__slide number-slide3">3</div>
                    <div className="keen-slider__slide number-slide4">4</div>
                    <div className="keen-slider__slide number-slide5">5</div>
                    <div className="keen-slider__slide number-slide6">6</div>
                </div>
            </div>

        </div>
    );
};

export default Carousal;