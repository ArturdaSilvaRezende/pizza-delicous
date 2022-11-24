import { Routes, Route } from "react-router-dom";

import { Main } from "../pages/Main";
import { Menu } from "../pages/Menu";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
