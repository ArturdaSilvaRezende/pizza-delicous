import { useState } from "react";

import { NavpillContents } from "./NavpillContents";
import { NavpillTabs } from "./NavpillTabs";
import * as C from "./style";

export const Navpill = () => {
    const [openTab, setOpenTab] = useState("pizza");

    return (
        <C.Navpill>
            <div className="navpill__overlay"></div>

            <C.Container>
                <NavpillTabs openTab={openTab} setOpenTab={setOpenTab} />
                <NavpillContents openTab={openTab} />
            </C.Container>
        </C.Navpill>
    );
};
