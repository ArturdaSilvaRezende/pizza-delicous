import { TitleGlobal } from "../TitleGlobal";
import { OurMenuContents } from "./OurMenuContents";
import { OurMenuPricing } from "./OurMenuPricing";
import * as C from "./style";

export const OurMenu = () => {
    return (
        <C.OurMenu>
            <TitleGlobal
                title="Our Menu"
                colorTitle="var(--white)"
                colorSubTitle="var(--gray)"
            />
            <OurMenuContents />
            <OurMenuPricing />
        </C.OurMenu>
    );
};
