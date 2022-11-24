import { TitleGlobal } from "../TitleGlobal";
import { OurMenuContents } from "./OurMenuContents";
import { OurMenuPricing } from "./OurMenuPricing";
import * as C from "./style";

type Props = {
    classNameTitle?: string;
};

export const OurMenu = (props: Props) => {
    return (
        <C.OurMenu>
            <TitleGlobal
                title="Our Menu"
                colorTitle="var(--white)"
                colorSubTitle="var(--gray)"
                classNameTitle={props.classNameTitle}
            />
            <OurMenuContents />
            <OurMenuPricing />
        </C.OurMenu>
    );
};
