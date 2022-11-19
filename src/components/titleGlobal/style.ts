import styled from "styled-components";

type Props = {
    colorTitle: string;
    colorSubTitle: string;
};

export const TitleGlobal = styled.hgroup<Props>`
    text-align: center;

    h1 {
        padding-top: 80px;
        margin-bottom: 30px;
        font-size: clamp(2rem, 3vw, 5%);
        font-weight: 500;
        font-family: "Josefin Sans", Arial, sans-serif;
        color: ${(props) => props.colorTitle};
    }
    h4 {
        padding-bottom: 80px;
        width: 50%;
        margin: 0 auto;
        font-weight: 300;
        color: ${(props) => props.colorSubTitle};
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        h4 {
            width: 70%;
        }
    }

    @media screen and (max-width: 767px) {
        h4 {
            width: 90%;
        }
    }
`;
