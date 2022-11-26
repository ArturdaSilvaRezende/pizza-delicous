import { Breadcrumb } from "../../components/Breadcrumb";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ContactContents } from "./ContactContents";

export const Contact = () => {
    return (
        <>
            <Header />
            <Breadcrumb title="Contact" page="Contact" />
            <ContactContents />
            <Footer />
        </>
    );
};
