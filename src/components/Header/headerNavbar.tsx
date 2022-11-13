import { Ref, MutableRefObject, useEffect } from "react";

import * as C from "./style";

type Props = {
    menuRef: Ref<HTMLElement | null>;
};

export const Navbar = (props: Props) => {
    const ref = props.menuRef as MutableRefObject<HTMLElement | null>;

    const showMenu = () => {
        window.onresize = () => {
            if (ref.current) {
                if (window.innerWidth > 767) {
                    ref.current.style.display = "flex";
                    ref.current.classList.remove("slideOutLeft");
                } else {
                    ref.current.style.display = "none";
                }
            }
        };
    };

    useEffect(() => {
        showMenu();
    });

    return (
        <C.Navbar ref={ref}>
            <ul>
                <li>
                    <a href=" ">Home</a>
                </li>
                <li>
                    <a href=" ">Menu</a>
                </li>
                <li>
                    <a href=" ">Services</a>
                </li>
                <li>
                    <a href=" ">Blog</a>
                </li>
                <li>
                    <a href=" ">About</a>
                </li>
                <li>
                    <a href=" ">Contact</a>
                </li>
            </ul>
        </C.Navbar>
    );
};
