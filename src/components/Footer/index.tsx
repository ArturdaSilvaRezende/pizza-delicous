import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhone,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import * as C from "./style";

export const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <C.Footer>
            <C.Container>
                {/* footer - about */}
                <div className="footer__about">
                    <h2>About</h2>
                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                    </p>
                    <nav>
                        <ul>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* footer - services */}
                <div className="footer__services">
                    <h2>Services</h2>
                    <nav>
                        <ul>
                            <li>Cooked</li>
                            <li>Deliver</li>
                            <li>Quality Foods</li>
                            <li>Mixed</li>
                        </ul>
                    </nav>
                </div>

                {/* footer - questions */}
                <div className="footer__questions">
                    <h2>Have a Questions?</h2>
                    <div>
                        <span>
                            <FaMapMarkerAlt />
                        </span>

                        <address>
                            203 Fake St. Mountain View, San Francisco,
                            California, USA
                        </address>
                    </div>
                    <div>
                        <span>
                            <FaPhone />
                        </span>

                        <p> +2 392 3929 210</p>
                    </div>
                    <div>
                        <span>
                            <GrMail />
                        </span>

                        <p>pizzadelicous@gmail.com</p>
                    </div>
                </div>
            </C.Container>

            <p className="footer__copy-right">
                Copyright ©{currentYear} All rights reserved | This template is
                made with by Colorlib
            </p>
        </C.Footer>
    );
};
