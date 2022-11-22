import { createGlobalStyle } from "styled-components";

import BgBody from "./images/bg-body.jpg";

export const GlobalStyle = createGlobalStyle`

     // ================================ reset ================================

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
        background-image: url(${BgBody});
        background-size: cover;
        background-attachment: fixed;
    }

    img {
        display: block;
    }

     // ================================ global style ================================

    .overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: -1;
    }

    .active {
        background-color: var(--orange);
        color: var(--text-dark) !important;
    }

    .displayNone {
        display: none !important;
    }


    // ================================ Animations ================================

    // ========== animation - open ========== 

    //slideIn

    .slideInLeft {
        animation-name: slideInLeft;
        animation-duration: 1s;
        animation-fill-mode: both;
        display: block;
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

    //fadeIn

    .fadeIn {
        animation-name: fadeIn;
        animation-duration: 0.7s;
        animation-fill-mode: both;
        animation-timing-function: ease-in;
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
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

    // ================================ Root ================================

    :root {
        --orange: #fac564;
        --white: #fff;
        --gray: gray;
        --light: #f8f9fa;
        --dark: #343a40;
        --bg-container: #000;
        --text-dark: #000;
        --swiper-pagination-bullet-inactive-color: #fac564;
        --twitter: #1DA1F2;
        --facebook: #4267B2;
        --color-icons: #5c3d03;
    }

`;
