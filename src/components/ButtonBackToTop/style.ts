import styled from "styled-components";

export const ButtonBackToTop = styled.button`
    position: fixed;
    bottom: 5px;
    right: 5px;
    z-index: 9999;
    background-color: var(--orange);
    padding: 3px;
    display: none;

    svg {
        font-size: 1.1rem;
        font-weight: 300;
    }
`;
