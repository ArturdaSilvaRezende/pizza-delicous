import { TitleGlobal } from "../TitleGlobal";
import { OurMenuContent } from "./OurMenuContent";
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
            <OurMenuContent />
            <OurMenuPricing />
        </C.OurMenu>
    );
};
