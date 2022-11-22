import styled from "styled-components";

import Bg01 from "./images/bg_1.jpg";
import Bg03 from "./images/bg_3.jpg";

export const Carousel = styled.section`
    .mySwiper {
        .carousel-item__home {
            background: url(${Bg03});
        }

        .carousel-item__content {
            background: url(${Bg01});
        }

        .swiper-pagination-bullet {
            background: var(--swiper-pagination-bullet-inactive-color);
            width: var(
                --swiper-pagination-bullet-width,
                var(--swiper-pagination-bullet-size, 15px)
            );
            height: var(
                --swiper-pagination-bullet-height,
                var(--swiper-pagination-bullet-size, 15px)
            );
        }

        @media screen and (max-width: 767px) {
            img {
                order: 1;
            }
            figcaption {
                order: 2;
            }
        }
    }
`;

export const Card = styled.figure`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 85vh;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .carousel__bg {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: -1;
    }

    img {
        width: 35%;
    }
    .carousel-item__img-left {
        margin-left: 10%;
    }
    .carousel-item__img-right {
        margin-right: 10%;
    }

    figcaption {
        hgroup {
            h2 {
                font-family: "Nothing You Could Do", cursive;
                color: var(--orange);
                font-size: clamp(2rem, 2.5vw, 12rem);
            }
            h1 {
                color: var(--white);
                font-size: 3rem;
                width: 65%;
                margin: 20px auto;
                font-weight: 500;
            }
        }
        p {
            color: var(--white);
            font-size: 1.3rem;
            line-height: 1.7;
            width: 70%;
            margin: 0 auto;
        }
        div {
            margin-top: 30px;

            button {
                padding: 10px 12px 10px 10px;
                border-radius: 10px;
                transition: 0.5s;
                text-align: center;

                &:first-child {
                    background-color: var(--orange);
                    border: 1px solid var(--orange);

                    &:hover {
                        background-color: transparent;
                        border: 1px solid var(--white);
                        color: var(--white);
                    }
                }

                &:last-child {
                    background-color: transparent;
                    border: 1px solid var(--white);
                    margin-left: 10px;
                    color: var(--white);

                    &:hover {
                        background-color: var(--orange);
                        border: 1px solid var(--orange);
                        color: var(--text-dark);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 992px) {
        figcaption {
            p {
                width: 80%;
                margin: 0 auto;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        height: 55vh;

        img {
            width: 40%;
        }
        .carousel-item__img-left {
            margin-left: 5%;
        }

        figcaption {
            hgroup {
                h1 {
                    font-size: 3rem;
                    width: 85%;
                }
            }
        }
    }

    @media screen and (max-width: 767px) {
        height: 80vh;
        flex-direction: column;

        img {
            width: 45%;
        }
        .carousel-item__img-left {
            margin: 0 0 20px 0;
        }
        .carousel-item__img-right {
            margin: 0 0 20px 0;
        }

        figcaption {
            hgroup {
                h1 {
                    width: 90%;
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        figcaption {
            hgroup {
                h1 {
                    font-size: 3rem;
                }
            }
        }
    }

    @media screen and (max-width: 599px) {
        figcaption {
            hgroup {
                h1 {
                    margin: 10px auto;
                }
            }
            p {
                font-size: 0.9rem;
            }

            div {
                margin: 20px 0 30px 0;
            }
        }
    }

    @media screen and (max-width: 320px) {
        img {
            width: 30%;
        }

        figcaption {
            hgroup {
                h1 {
                    margin: 10px auto;
                    font-size: 1.3rem;
                }
            }
            p {
                font-size: 0.7rem;
            }

            div {
                margin: 20px 0 30px 0;

                button {
                    padding: 7px;
                }
            }
        }
    }
`;
