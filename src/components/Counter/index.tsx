import { CounterContents } from "./CounterContents";
import { CounterGallery } from "./CounterGallery";
import * as C from "./style";

export const Counter = () => {
    return (
        <C.Counter>
            <CounterGallery />
            <CounterContents />
        </C.Counter>
    );
};
