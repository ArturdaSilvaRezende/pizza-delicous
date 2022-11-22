import { useState } from "react";

import NavpillHero from "./images/navpill.jpg";
import { NavpillContents } from "./NavpillContents";
import { NavpillTabs } from "./NavpillTabs";
import * as C from "./style";

export const Navpill = () => {
    const [openTab, setOpenTab] = useState("pizza");

    return (
        <C.Navpill>
            <div className="navpill__overlay"></div>
            <figure className="navpill__hero">
                <img src={NavpillHero} alt="navpill-hero" />
            </figure>
            <C.Container>
                <NavpillTabs openTab={openTab} setOpenTab={setOpenTab} />
                <NavpillContents openTab={openTab} />
            </C.Container>
        </C.Navpill>
    );
};
