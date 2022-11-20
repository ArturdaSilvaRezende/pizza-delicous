import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import CardImgItem01 from "./images/bg_1.png";
import CardImgItem02 from "./images/bg_2.png";
import * as C from "./style";

export const Carousel = () => {
    return (
        <C.Carousel>
            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <C.Card className="carousel-item__home">
                        <div className="overlay"></div>
                        <figcaption>
                            <hgroup>
                                <h2>Welcome</h2>
                                <h1>We cooked your desired Pizza Recipe</h1>
                            </hgroup>
                            <p>
                                A small river named Duden flows by their place
                                and supplies it with the necessary regelialia.
                            </p>
                            <div>
                                <button>Order Now</button>
                                <button>View Menu</button>
                            </div>
                        </figcaption>
                    </C.Card>
                </SwiperSlide>

                <SwiperSlide>
                    <C.Card className="carousel-item__content">
                        <div className="carousel__bg"></div>

                        <img
                            src={CardImgItem01}
                            alt="card-image-01"
                            className="carousel-item__img-left"
                        />

                        <figcaption>
                            <hgroup>
                                <h2>Delicious</h2>
                                <h1>Italian Cuizine</h1>
                            </hgroup>
                            <p>
                                A small river named Duden flows by their place
                                and supplies it with the necessary regelialia.
                            </p>
                            <div>
                                <button>Order Now</button>
                                <button>View Menu</button>
                            </div>
                        </figcaption>
                    </C.Card>
                </SwiperSlide>

                <SwiperSlide>
                    <C.Card className="carousel-item__content carousel-item__last-child">
                        <div className="carousel__bg"></div>

                        <figcaption>
                            <hgroup>
                                <h2>Crunchy</h2>
                                <h1>Italian Pizza</h1>
                            </hgroup>
                            <p>
                                A small river named Duden flows by their place
                                and supplies it with the necessary regelialia.
                            </p>
                            <div>
                                <button>Order Now</button>
                                <button>View Menu</button>
                            </div>
                        </figcaption>

                        <img
                            src={CardImgItem02}
                            alt="card-image-02"
                            className="carousel-item__img-right"
                        />
                    </C.Card>
                </SwiperSlide>
            </Swiper>
        </C.Carousel>
    );
};
