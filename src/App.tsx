import { Main } from "./pages/Main";
import { GlobalStyle } from "./shared/assets/styles/globalStyle";
import "./shared/assets/fonts/flaticon/font/flaticon.css";
import "./shared/assets/fonts/icomoon/icomoon.css";

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Main />
        </>
    );
};
