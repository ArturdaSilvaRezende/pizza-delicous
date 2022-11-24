import styled from "styled-components";

export const Blog = styled.section``;

export const BlogContents = styled.div``;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;

    figure {
        width: 30%;

        img {
            width: 100%;
            height: 50vh;
            border-radius: 10px;
        }

        figcaption {
            hgroup {
                margin: 20px 0;
                text-align: center;

                h3 {
                    color: var(--gray);
                    font-weight: 500;
                }

                h2 {
                    color: var(--white);
                }
            }

            p {
                color: var(--gray);
                text-align: center;
                width: 90%;
                margin: 0 auto;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        figure {
            img {
                height: 20vh;
            }
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        figure {
            img {
                height: 20vh;
            }

            figcaption {
                h3,
                p {
                    font-size: 0.9rem;
                }

                p {
                    width: 95%;
                }
            }
        }
    }

    @media screen and (max-width: 599px) {
        flex-direction: column;

        figure {
            width: 90%;

            & + figure {
                margin-top: 60px;
            }

            img {
                height: 100%;
            }

            figcaption {
                hgroup {
                    h3 {
                        margin-bottom: 5px;
                    }
                }
            }
        }
    }
`;
