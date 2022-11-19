import { TitleGlobal } from "../TitleGlobal";
import { OurMenuPricingList } from "./OurMenuPricingList";
import * as C from "./style";

export const OurMenuPricing = () => {
    const menuList = OurMenuPricingList;
    return (
        <C.OurMenuPricing>
            <TitleGlobal
                title="Our Menu Pricing"
                colorTitle="var(--white)"
                colorSubTitle="var(--gray)"
            />
            <C.Container>
                {menuList.map((item) => (
                    <figure key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <figcaption>
                            <div>
                                <h3>{item.title}</h3>
                                <span></span>
                                <p>R$29,90</p>
                            </div>
                            <p className="description">
                                A small river named Duden flows by their place
                                and supplies
                            </p>
                        </figcaption>
                    </figure>
                ))}
            </C.Container>
        </C.OurMenuPricing>
    );
};
