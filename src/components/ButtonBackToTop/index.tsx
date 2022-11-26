import { useCallback, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

import * as C from "./style";

export const ButtonBackToTop = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const HandleClickScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const HandleScrollTopButton = useCallback(() => {
        if (buttonRef.current) {
            if (
                document.body.scrollTop > 250 ||
                document.documentElement.scrollTop > 250
            ) {
                buttonRef.current.style.display = "block";
            } else {
                buttonRef.current.style.display = "none";
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            HandleScrollTopButton();
        });

        return window.removeEventListener("scroll", () => {
            HandleScrollTopButton();
        });
    }, []);

    return (
        <C.ButtonBackToTop
            onClick={() => HandleClickScrollToTop()}
            ref={buttonRef}
        >
            <FaArrowUp />
        </C.ButtonBackToTop>
    );
};
