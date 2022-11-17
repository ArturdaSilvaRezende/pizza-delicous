import { Ref, Dispatch, SetStateAction, MutableRefObject } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import * as C from "./style";

type Props = {
    isMenu: boolean;
    setIsMenu: Dispatch<SetStateAction<boolean>>;
    menuRef: Ref<HTMLElement | null>;
};

export const HeaderBtn = (props: Props) => {
    const ref = props.menuRef as MutableRefObject<HTMLElement | null>;

    const handleMenu = () => {
        if (ref.current) {
            if (props.isMenu === false) {
                ref.current.style.display = "block";
                ref.current.classList.remove("slideOutLeft");
                ref.current.classList.add("slideInLeft");
                return props.setIsMenu(true);
            }

            ref.current.classList.remove("slideInLeft");
            ref.current.classList.add("slideOutLeft");

            setTimeout(() => {
                if (ref.current) {
                    ref.current.style.display = "none";
                }
            }, 500);

            return props.setIsMenu(false);
        }
    };

    return (
        <C.HeaderBtn onClick={() => handleMenu()}>
            {props.isMenu === false ? <FaBars /> : <AiOutlineClose />}
        </C.HeaderBtn>
    );
};
