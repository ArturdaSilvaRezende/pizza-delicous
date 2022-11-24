import { Breadcrumb } from "../../components/Breadcrumb";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Navpill } from "../../components/Navpill";
import { OurMenu } from "../../components/OurMenu";

export const Menu = () => {
    return (
        <>
            <Header />
            <Breadcrumb title="Our Menu" page="Menu" />
            <OurMenu classNameTitle="displayNone" />
            <Navpill />
            <Footer />
        </>
    );
};
