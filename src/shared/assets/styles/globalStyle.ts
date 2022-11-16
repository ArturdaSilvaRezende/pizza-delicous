import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 100%
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    body {
        font-family: "Poppins", sans-serif;
    }

    img {
        display: block;
    }

    // ========== animation - open
    .slideInLeft {
        animation-name: slideInLeft;
        animation-duration: 1s;
        animation-fill-mode: both;
    }


    @keyframes slideInLeft {
        0% {
            transform: translateX(-100%);
            visibility: visible;
        }
        100% {
            transform: translateX(0);
        }
    } 

    // ========== animation - close
    .slideOutLeft {
        animation-name: slideOutLeft;
        animation-duration: 1s;
        animation-fill-mode: both;
    }
 
    @keyframes slideOutLeft {
        0% {
            transform: translateX(0);
        }
        100% {
            visibility: hidden;
            transform: translateX(-100%);
        }
    } 

    :root {
        --orange: #fac564;
        --white: #fff;
        --gray: gray;
        --light: #f8f9fa;
        --dark: #343a40;
        --bg-container: #000;
        --text-dark: #000;
        --swiper-pagination-bullet-inactive-color: #fac564;
    }

`;
