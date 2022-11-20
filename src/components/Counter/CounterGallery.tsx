import Gallery01 from "./images/gallery-1.jpg";
import Gallery02 from "./images/gallery-2.jpg";
import Gallery03 from "./images/gallery-3.jpg";
import Gallery04 from "./images/gallery-4.jpg";
import * as C from "./style";

export const CounterGallery = () => {
    return (
        <C.CounterGallery>
            <img src={Gallery01} alt="gallery-img-01" />
            <img src={Gallery02} alt="gallery-img-02" />
            <img src={Gallery03} alt="gallery-img-03" />
            <img src={Gallery04} alt="gallery-img-04" />
        </C.CounterGallery>
    );
};
