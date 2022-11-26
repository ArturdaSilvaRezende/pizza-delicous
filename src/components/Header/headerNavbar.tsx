import { Ref, MutableRefObject, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </C.Navbar>
    );
};
