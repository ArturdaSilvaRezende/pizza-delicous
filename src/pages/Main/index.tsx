import { About } from "../../components/About";
import { Counter } from "../../components/Counter";
import { Header } from "../../components/Header";
import { OurMenu } from "../../components/OurMenu";
import { OurServices } from "../../components/OurServices";
import { Carousel } from "./Carousel";

export const Main = () => {
    return (
        <main>
            <Header />
            <Carousel />
            <About />
            <OurServices />
            <OurMenu />
            <Counter />
        </main>
    );
};
