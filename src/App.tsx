import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./routes";
import { GlobalStyle } from "./shared/assets/styles/globalStyle";
import "./shared/assets/fonts/flaticon/font/flaticon.css";
import "./shared/assets/fonts/icomoon/icomoon.css";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <AppRouter />
            </BrowserRouter>
        </>
    );
};
