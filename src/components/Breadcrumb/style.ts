import styled from "styled-components";

import BreadcrumbBg from "./images/bg_3.jpg";

export const Breadcrumb = styled.div`
    background-image: url(${BreadcrumbBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 50vh;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 100px;

    .breadcrumb__title {
        color: var(--white);
        font-size: 2.5rem;
    }

    .breadcrumb__items {
        display: flex;
        align-items: center;
        margin-top: 20px;

        a,
        p {
            font-size: 1.2rem;
        }

        a {
            color: var(--white);
            transition: 0.4s;

            &:hover {
                color: var(--orange);
            }
        }

        span {
            color: var(--white);
            margin: 0 10px;
        }

        p {
            color: var(--orange);
        }
    }

    @media screen and (min-width: 600px) and (max-width: 992px) {
        height: 25vh;
    }
`;
