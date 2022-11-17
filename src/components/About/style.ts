import styled from "styled-components";

export const About = styled.section``;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const AboutAddress = styled.div`
    background-color: var(--bg-container);
    padding: 20px 0;
    display: flex;
    justify-content: center;
    width: 80%;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        & + div {
            margin-left: 60px;
        }

        span {
            color: var(--orange);
            font-size: 1.7rem;
            margin-right: 20px;
        }

        .description {
            display: flex;
            flex-direction: column;

            p {
                margin-right: auto;

                &:first-child {
                    color: var(--white);
                    font-weight: bold;
                    font-size: 0.9rem;
                    margin-bottom: 5px;
                }

                &:last-child {
                    color: var(--gray);
                    font-size: 0.9rem;
                }
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        justify-content: center;

        div {
            flex-direction: column;
            width: 150px;

            span {
                margin-bottom: 20px;
            }

            .description {
                text-align: center;
            }
        }
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
        width: 100%;
        padding: 10% 0 10% 5%;

        div {
            justify-content: flex-start;

            & + div {
                margin-left: 0;
                margin-top: 20px;
            }
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        justify-content: center;
        padding: 10% 0 10% 0;

        div {
            flex-direction: column;
            span {
                margin-bottom: 20px;
            }

            .description {
                p {
                    text-align: center;
                    width: 100%;

                    &:first-child {
                        font-size: 1.2rem;
                    }

                    &:last-child {
                        font-size: 1.1rem;
                    }
                }
            }
        }
    }
`;

export const AboutSocial = styled.div`
    background-color: var(--orange);
    width: 20%;

    nav {
        margin: 22px auto 0 auto;
        width: 200px;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;

            li {
                color: var(--white);
                width: 50px;
                height: 50px;
                line-height: 60px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.7rem;
            }

            .about-social__twitter {
                background-color: var(--twitter);
            }

            .about-social__facebook {
                background-color: var(--facebook);
            }

            .about-social__instagram {
                background: #d6249f;
                background: radial-gradient(
                    circle at 30% 107%,
                    #fd5949 45%,
                    #d6249f 60%,
                    #285aeb 90%
                );
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding: 10px 0;
        width: 10%;

        nav {
            margin: 0 auto;
            width: 100%;

            ul {
                flex-direction: column;
                margin-left: 10px;

                li {
                    width: 50px;
                    height: 50px;
                    line-height: 60px;
                    font-size: 1.6rem;

                    & + li {
                        margin-top: 10px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        padding: 5%;

        nav {
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        nav {
            width: 250px;
            ul {
                li {
                    width: 70px;
                    height: 70px;
                    line-height: 80px;
                    font-size: 2rem;
                }
            }
        }
    }

    @media screen and (max-width: 599px) {
        nav {
            width: 190px;
            ul {
                li {
                    width: 50px;
                    height: 50px;
                    line-height: 60px;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export const AboutHero = styled.figure`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    img {
        width: 100%;
    }

    figcaption {
        padding: 30px;
        text-align: center;

        h1 {
            color: var(--white);
            font-size: 2rem;
            font-weight: 500;
            width: 80%;
            margin: 0 auto 15px auto;
            line-height: 1.2;

            span {
                color: var(--orange);

                &:first-child {
                    margin-left: -15px;
                }
            }
        }

        p {
            color: var(--gray);
        }
    }

    @media screen and (max-width: 992px) {
        grid-template-columns: 100%;

        img {
            width: 100%;
            height: 30vh;
            object-fit: cover;
        }

        figcaption {
            margin: 40px auto;
            width: 90%;
        }
    }

    @media screen and (max-width: 599px) {
        figcaption {
            h1 {
                width: 90%;
                font-size: 1.4rem;
            }

            p {
                font-size: 0.9rem;
            }
        }
    }
`;
