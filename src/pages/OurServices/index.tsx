import { Blog } from "../../components/Blog";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ButtonBackToTop } from "../../components/ButtonBackToTop";
import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { OurServices } from "../../components/OurServices";

export const Services = () => {
    return (
        <>
            <Header />
            <Breadcrumb title="Our Services" page="Services" />
            <OurServices />
            <Counter />
            <Blog />
            <Footer />
            <ButtonBackToTop />
        </>
    );
};
