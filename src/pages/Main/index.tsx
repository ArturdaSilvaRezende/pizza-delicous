import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { OurServices } from "../../components/OurServices";
import { Carousel } from "./Carousel";

export const Main = () => {
    return (
        <main>
            <Header />
            <Carousel />
            <About />
            <OurServices />
        </main>
    );
};
