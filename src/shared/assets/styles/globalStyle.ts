import { createGlobalStyle } from "styled-components";

import BgBody from "./images/bg-body.jpg";

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
        background-image: url(${BgBody});
        background-size: cover;
        background-attachment: fixed;
    }

    img {
        display: block;
    }

    .overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: -1;
    }

    // ================================ Animations ================================

    // ========== animation - open
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
