import styled from "styled-components";

export const Header = styled.header`
    background-color: var(--bg-container);
    padding: 15px 0;
    position: relative;

    .header__logo {
        font-family: "Josefin Sans", sans-serif !important;

        .header__logo-container {
            .header__pizza {
                font-size: 2rem;

                span {
                    &:last-child {
                        margin-left: 5px;
                        color: var(--white);
                    }
                }
            }

            .header__delicous {
                color: var(--orange);
                margin-left: 18px;
                text-transform: uppercase;
                letter-spacing: 4.5px;
            }
        }
    }

    [class^="flaticon-"]:before,
    [class*=" flaticon-"]:before,
    [class^="flaticon-"]:after,
    [class*=" flaticon-"]:after {
        font-size: 2rem;
        color: var(--orange);
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding: 15px 30px;
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Navbar = styled.nav`
    background-color: var(--bg-container);

    ul {
        display: flex;

        li + li {
            margin-left: 20px;
        }

        li {
            a {
                color: var(--gray);
                font-weight: 400;
                transition: 0.5s;
                border-bottom: 2px solid transparent;
                padding-bottom: 4px;

                &:hover {
                    color: var(--orange);
                    border-color: var(--orange);
                }
            }
        }
    }

    @media screen and (max-width: 767px) {
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        padding: 20px 40px;
        text-align: center;
        display: none;

        ul {
            flex-direction: column;

            li + li {
                margin-left: 0;
            }

            li {
                margin-bottom: 10px;
            }
        }
    }
`;

export const HeaderBtn = styled.button`
    color: var(--white);
    font-size: 1.7rem;
    margin-top: 10px;
    display: none;

    @media screen and (max-width: 767px) {
        margin-right: 20px;
        display: block;
    }
`;
