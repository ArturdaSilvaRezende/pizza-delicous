import styled from "styled-components";

import NavpillHero from "./images/navpill.jpg";

export const Navpill = styled.section`
    display: flex;
    background-image: url(${NavpillHero});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    z-index: 1;
    padding-bottom: 60px;
    position: relative;
    margin-top: 80px;

    .navpill__overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.85);
        z-index: -1;
    }

    .navpill__hero {
        img {
            width: 30vw;
            height: 90vh;
        }
    }

    @media screen and (min-width: 993px) and (max-width: 1024px) {
        .navpill__hero {
            img {
                width: 30vw;
                height: 100vh;
            }
        }
    }

    @media screen and (max-width: 992px) {
        flex-direction: column;
        position: relative;

        .navpill__hero {
            display: none;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NavpillTabs = styled.nav`
    margin: 6% 0 6% 4%;

    ul {
        display: flex;
        justify-content: center;

        li {
            cursor: pointer;
            color: var(--orange);
            border: 1px solid var(--orange);
            width: 80px;
            text-align: center;
            padding: 6px;
            transition: 0.4s;

            & + li {
                margin-left: 15px;
            }

            &:hover {
                background-color: var(--orange);
                color: var(--text-dark);
            }
        }
    }

    @media screen and (min-width: 600px) and (max-width: 992px) {
        margin: 11% 0;
    }

    @media screen and (max-width: 599px) {
        margin: 8% auto;
        ul {
            flex-wrap: wrap;
            margin-top: 5%;

            li {
                width: 35%;

                & + li {
                    margin-left: 0;
                }
            }
        }
    }
`;

export const NavpillContents = styled.div`
    margin-left: 4%;

    .navpill__tab {
        display: flex;

        figure {
            img {
                width: 50%;
                margin: 0 auto;
                border-radius: 10px;
            }

            figcaption {
                text-align: center;

                h3 {
                    color: var(--white);
                    margin: 20px 0;
                }

                .navpill__description {
                    color: var(--white);
                    opacity: 0.96;
                    width: 70%;
                    margin: 0 auto;
                }

                .navpill__price {
                    color: var(--orange);
                    margin: 10px 0;
                }

                button {
                    border: 1px solid var(--white);
                    color: var(--white);
                    padding: 7px;
                    transition: 0.4s;

                    &:hover {
                        border: 1px solid transparent;
                        background-color: var(--white);
                        color: var(--text-dark);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 992px) {
        margin-left: 0;
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        .navpill__tab {
            margin: 2% 0 10% 0;
            figure {
                figcaption {
                    .navpill__description {
                        font-size: 0.9rem;
                        width: 80%;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 599px) {
        .navpill__tab {
            flex-direction: column;
            margin: 15% 0 0 0;

            figure {
                & + figure {
                    margin-top: 15%;
                }
            }
        }
    }
`;
