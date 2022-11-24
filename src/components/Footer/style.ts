import styled from "styled-components";

export const Footer = styled.footer`
    background-color: var(--bg-container);
    margin-top: 120px;
    padding: 70px 20px;

    .footer__copy-right {
        text-align: center;
        margin-top: 130px;
        color: var(--gray);

        a {
            color: var(--white);
            font-weight: bold;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        .footer__copy-right {
            width: 60%;
            line-height: 2;
            margin: 80px auto 0 auto;
        }
    }

    @media screen and (max-width: 599px) {
        .footer__copy-right {
            margin: 70px auto 0 auto;
            font-size: 0.9rem;
            width: 250px;
        }
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    text-align: center;

    div {
        h2 {
            font-size: 1.6rem;
            font-family: "Josefin Sans", Arial, sans-serif;
        }

        h2,
        li {
            color: var(--white);
        }
        p {
            color: var(--gray);
        }
    }

    .footer__about {
        p {
            margin: 20px auto;
            width: 90%;
        }

        nav {
            margin-top: 20px;

            ul {
                display: flex;
                justify-content: center;

                li {
                    background-color: var(--gray);
                    width: 40px;
                    height: 40px;
                    line-height: 45px;
                    border-radius: 50%;
                    font-size: 1.3rem;
                    text-align: center;
                    cursor: pointer;
                    transition: 0.4s;

                    & + li {
                        margin-left: 20px;
                    }
                }
            }
        }
    }

    .footer__services {
        nav {
            margin-top: 30px;

            ul {
                li {
                    transition: 0.4s;
                    cursor: pointer;
                    width: 130px;
                    margin: 0 auto;

                    & + li {
                        margin-top: 10px;
                    }
                    &:hover {
                        color: var(--gray);
                    }
                }
            }
        }
    }

    .footer__questions {
        width: 90%;

        .footer__questions-address {
            span {
                width: 25px;
            }
        }

        h2 {
            margin-bottom: 25px;
        }
        div {
            display: flex;
            justify-content: center;
            align-items: center;

            & + div {
                margin-top: 30px;
            }

            span {
                display: block;
            }

            address {
                color: var(--gray);
                font-size: 0.8rem;
                margin: 10px 0 0 -5px;
                width: 60%;
            }

            svg {
                color: var(--white);
                font-size: 1.2rem;
                margin-right: 15px;
            }
        }
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: 100%;

        div {
            margin: 0 auto;

            & + div {
                margin-top: 20px;
            }
        }

        .footer__about {
            p {
                margin: 20px auto 30px auto;
            }
        }

        .footer__questions {
            div {
                address {
                    margin: 10px 0 0 0;
                    width: 90%;
                }
            }
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        .footer__about {
            p {
                width: 70%;
            }
        }

        .footer__questions {
            div {
                width: 300px;
                margin: 0 auto;
            }
        }
    }

    @media screen and (min-width: 321px) and (max-width: 599px) {
        .footer__questions {
            div {
                width: 80%;
                margin: 0 auto;
            }
        }
    }
    @media screen and (max-width: 280px) {
        .footer__questions {
            div {
                width: 80%;
                margin: 0 auto;

                svg {
                    font-size: 1.1rem;
                }

                p {
                    font-size: 0.9rem;
                }
            }
        }
    }
`;
