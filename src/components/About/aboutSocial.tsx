import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import * as C from "./style";

export const AboutSocial = () => {
    return (
        <C.AboutSocial>
            <nav>
                <ul>
                    <li className="about-social__twitter">
                        <FaTwitter />
                    </li>
                    <li className="about-social__facebook">
                        <FaFacebookF />
                    </li>
                    <li className="about-social__instagram">
                        <FaInstagram />
                    </li>
                </ul>
            </nav>
        </C.AboutSocial>
    );
};
