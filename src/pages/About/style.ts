import styled from "styled-components";

export const AboutOurChefs = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    figure {
        border: 1px solid var(--color-icons);
        padding: 10px;
        transition: 0.4s;

        &:hover {
            border: 1px solid var(--orange);

            img {
                border: 1px solid var(--orange);
            }
        }

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin: 20px auto;
            padding: 3px;
            border: 2px solid var(--color-icons);
        }

        figcaption {
            text-align: center;

            hgroup {
                margin-bottom: 20px;

                h2 {
                    color: var(--orange);
                    margin-bottom: 10px;
                    font-size: 1.2rem;
                }
                h3 {
                    color: var(--gray);
                    opacity: 0.8;
                }
            }

            p {
                width: 80%;
                margin: 0 auto 20px auto;
                color: var(--white);
            }
        }
    }

    @media screen and (min-width: 993px) and (max-width: 1024px) {
        padding: 0 20px;
    }

    @media screen and (min-width: 600px) and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 20px;
    }

    @media screen and (max-width: 599px) {
        grid-template-columns: 100%;

        figure {
            width: 80%;
            margin: 0 auto;
        }
    }
`;
