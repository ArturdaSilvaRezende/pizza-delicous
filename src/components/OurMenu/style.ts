import styled from "styled-components";

export const OurMenu = styled.section``;

export const OurMenuContent = styled.div`
    display: flex;
    flex-wrap: wrap;

    figure {
        width: 33.3%;
        display: flex;

        img {
            width: 50%;
        }

        figcaption {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 0 20px;
            width: 50%;

            h3 {
                margin: 10px 0;
                color: var(--white);
            }

            p {
                color: var(--gray);
            }

            div {
                display: flex;
                margin-top: 15px;

                p {
                    color: var(--orange);
                }

                button {
                    border: 1px solid var(--white);
                    color: var(--white);
                    width: 70px;
                    padding: 3px;
                    margin-left: 20px;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        figure {
            & + figure {
                margin-top: 30px;
            }

            figcaption {
                width: 100%;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        figure {
            margin: 0 auto;
            width: 90%;

            img {
                width: 25%;
            }

            figcaption {
                display: flex;
                justify-content: center;
                flex-direction: column;

                div {
                    margin-bottom: 20px;
                }
            }
        }
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;

        .figure__left {
            figcaption {
                margin-left: 5px;
            }
        }

        figure {
            width: 100%;

            img {
                width: 40%;
            }

            figcaption {
                width: auto;
                p {
                    font-size: 0.8rem;
                }

                div {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }
            }
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        figure {
            margin: 0 auto;
            width: 90%;

            img {
                width: 30%;
            }
            figcaption {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }

    @media screen and (max-width: 280px) {
        figure {
            img {
                object-fit: cover;
            }

            figcaption {
                padding: 0 5px;

                div {
                    p {
                        font-size: 0.8rem;
                        width: 50px;
                    }
                }
            }
        }
    }
`;

export const OurMenuPricing = styled.div``;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    figure {
        display: flex;
        align-items: center;
        margin: 0 0 20px 30px;
        width: 40%;

        img {
            width: 80px;
            border-radius: 50%;
        }

        figcaption {
            margin-left: 10px;

            div {
                display: flex;
                justify-content: space-between;
                position: relative;

                h3,
                p {
                    background-color: var(--bg-container);
                    padding: 5px;
                }

                h3 {
                    color: var(--gray);
                    font-weight: 300;
                }

                span {
                    position: absolute;
                    bottom: 40%;
                    left: 0;
                    right: 0;
                    content: "";
                    width: 100%;
                    height: 1px;
                    border-bottom: 1px dashed var(--orange);
                    z-index: -1;
                }

                p {
                    color: var(--orange);
                }
            }

            .description {
                margin-top: 7px;
                color: var(--gray);
                font-size: 0.9rem;
                font-weight: 300;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        max-width: 1200px;
        margin: 0 auto;
        justify-content: space-evenly;

        figure {
            margin: 0 0 20px 0;

            figcaption {
                h3 {
                    font-size: 0.9rem;
                }
            }
        }
    }

    @media screen and (max-width: 767px) {
        figure {
            width: 90%;
            margin: 0 auto 30px auto;

            figcaption {
                h3,
                p {
                    font-size: 0.9rem;
                }
            }
        }
    }

    @media screen and (max-width: 320px) {
        width: 100%;
        figure {
            img {
                width: 50px;
            }

            figcaption {
                h3,
                p {
                    font-size: 0.7rem;
                }
            }
        }
    }
`;
