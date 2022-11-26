import styled from "styled-components";

export const ContactContents = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: 100px auto 100px auto;
    padding: 0 20px;
    gap: 2rem;

    .contact-information {
        width: 40%;
        margin-right: 20px;

        h1 {
            color: var(--white);
            font-size: 1.4rem;
            font-weight: 500;
        }

        p {
            color: var(--orange);
            font-weight: normal;
            font-size: 0.9rem;
            margin-top: 15px;

            span {
                color: var(--contact-span);
                font-size: 1rem;
                margin-right: 10px;
            }
        }
    }

    form {
        width: 50%;
        margin-top: 10px;

        input,
        textarea {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: var(--white);
            outline: none;

            &::placeholder {
                color: var(--contact-span);
            }

            &:focus {
                border-bottom: 1px solid var(--orange);
            }
        }

        input {
            padding-bottom: 15px;
        }

        div {
            display: flex;

            input {
                width: 50%;

                & + input {
                    margin-left: 20px;
                }
            }
        }

        .input-subject {
            margin: 30px 0;
            width: 100%;
        }

        textarea {
            font-family: arial, sans-serif;
            width: 100%;
            margin-top: 10px;
            resize: none;
        }

        button {
            margin-top: 10px;
            background-color: var(--orange);
            border: 1px solid var(--orange);
            padding: 10px;
            transition: 0.4s;

            &:hover {
                color: var(--orange);
                background-color: transparent;
            }
        }
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;

        .contact-information,
        form {
            width: 90%;
            margin: 0 auto;
        }

        form {
            margin-top: 25px;
        }
    }

    @media screen and (max-width: 599px) {
        form {
            div {
                flex-wrap: wrap;

                input {
                    width: 100%;

                    & + input {
                        margin-left: 0;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
`;
