import styled from "styled-components";

import BgSection from "./images/food.png";

export const OurServices = styled.section`
    background: url(${BgSection}) 100% 100%;
    padding-bottom: 60px;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    div {
        width: 30%;
        text-align: center;
        color: var(--color-icons);

        [class^="flaticon-"]:before,
        [class*=" flaticon-"]:before,
        [class^="flaticon-"]:after,
        [class*=" flaticon-"]:after {
            font-size: 4.5rem;
        }

        span {
            border: 1px solid var(--color-icons);
            padding: 10px;
            display: block;
            width: 120px;
            margin: 0 auto 30px auto;
            border-radius: 10px;
        }

        h4 {
            font-size: 1.5rem;
            font-weight: 500;
            margin: 30px 0;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        div {
            h4 {
                font-size: 1.3rem;
            }
            p {
                width: 80%;
                margin: 0 auto;
            }
        }
    }

    @media screen and (min-width: 600px) and (max-width: 767px) {
        div {
            h4 {
                font-size: 1.2rem;
            }
            p {
                width: 80%;
                margin: 0 auto;
            }
        }
    }

    @media screen and (max-width: 599px) {
        div {
            width: 90%;
            margin: 0 auto;

            & + div {
                margin-top: 30px;
            }

            p {
                width: 80%;
                margin: 0 auto;
            }
        }
    }
`;
