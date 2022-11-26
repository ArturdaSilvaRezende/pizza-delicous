import { About } from "../../components/About";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ButtonBackToTop } from "../../components/ButtonBackToTop";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TitleGlobal } from "../../components/TitleGlobal";
import { AboutOurChefs } from "./AboutOurChefs";

export const PageAbout = () => {
    return (
        <>
            <Header />
            <Breadcrumb title="About" page="About" />
            <About />
            <div className="about__hero"></div>
            <TitleGlobal
                title="Our Chef"
                colorTitle="var(--white)"
                colorSubTitle="var(--gray)"
            />
            <AboutOurChefs />
            <Footer />
            <ButtonBackToTop />
        </>
    );
};
