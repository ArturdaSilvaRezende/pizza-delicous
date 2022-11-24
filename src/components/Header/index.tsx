import { useRef, useState } from "react";

import { HeaderBtn } from "./headerBtnMenu";
import { Navbar } from "./headerNavbar";
import * as C from "./style";

export const Header = () => {
    const [isMenu, setIsMenu] = useState(false);
    const menuRef = useRef<HTMLElement | null>(null);

    return (
        <C.Header>
            <C.Container>
                <a href="/" className="header__logo">
                    <div className="header__logo-container">
                        <p className="header__pizza">
                            <span className="flaticon-pizza-1"></span>
                            <span>Pizza</span>
                        </p>
                        <p className="header__delicous">Delicous</p>
                    </div>
                </a>
                <Navbar menuRef={menuRef} />
                <HeaderBtn
                    isMenu={isMenu}
                    setIsMenu={setIsMenu}
                    menuRef={menuRef}
                />
            </C.Container>
        </C.Header>
    );
};
