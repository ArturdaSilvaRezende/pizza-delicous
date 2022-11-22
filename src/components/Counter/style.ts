import styled from "styled-components";

import CounterBG from "./images/counter-bg.jpg";

export const Counter = styled.section`
    margin-top: 80px;
`;

export const CounterGallery = styled.figure`
    display: flex;
    flex-wrap: wrap;

    img {
        width: 25%;
    }

    @media screen and (min-width: 600px) and (max-width: 992px) {
        img {
            width: 50%;
        }
    }

    @media screen and (max-width: 599px) {
        img {
            width: 100%;
        }
    }
`;

export const CounterContents = styled.div`
    padding: 6% 0;

    background: url(${CounterBG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    z-index: 1;

    h1 {
        color: white;
    }
`;

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    div {
        display: flex;
        flex-direction: column;

        [class^="flaticon-"]:before,
        [class*=" flaticon-"]:before,
        [class^="flaticon-"]:after,
        [class*=" flaticon-"]:after {
            font-size: clamp(2rem, 2vw, 2.7rem);
            position: relative;
            left: -10px;
        }

        h3,
        .counter__icon {
            color: var(--orange);
        }

        .counter__icon {
            border: 2px solid var(--orange);
            width: 80px;
            padding: 10px;
            margin: 0 auto;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
        }

        h3,
        p {
            text-align: center;
        }

        h3 {
            margin: 15px 0;
            font-size: 1.7rem;
        }

        p {
            color: var(--white);
            text-shadow: 0 0 2px var(--orange);
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        justify-content: center;
        max-width: 500px;

        div {
            width: 50%;
            margin: 20px 0;

            .counter__icon {
                width: 70px;
            }
        }
    }

    @media screen and (max-width: 599px) {
        justify-content: space-evenly;

        div {
            margin-top: 40px;
            width: 45%;
        }
    }

    @media screen and (max-width: 320px) {
        flex-direction: column;
    }
`;
