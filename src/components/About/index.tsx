import { AboutAddress } from "./aboutAddress";
import { AboutHero } from "./aboutHero";
import { AboutSocial } from "./aboutSocial";
import * as C from "./style";

export const About = () => {
    return (
        <C.About>
            <C.Container>
                <AboutAddress />
                <AboutSocial />
            </C.Container>
            <AboutHero />
        </C.About>
    );
};
