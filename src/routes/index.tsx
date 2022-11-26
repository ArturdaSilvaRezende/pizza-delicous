import { Routes, Route } from "react-router-dom";

import { PageAbout } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Main } from "../pages/Main";
import { Menu } from "../pages/Menu";
import { NotFound } from "../pages/NotFound";
import { Services } from "../pages/OurServices";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
