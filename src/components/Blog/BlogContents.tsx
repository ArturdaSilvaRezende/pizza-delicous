import BlogImg01 from "./images/image_1.jpg";
import BlogImg02 from "./images/image_2.jpg";
import BlogImg03 from "./images/image_4.jpg";
import * as C from "./style";

export const BlogContents = () => {
    return (
        <C.BlogContents>
            <C.Container>
                <figure>
                    <img src={BlogImg01} alt="blog-image-01" />
                    <figcaption>
                        <hgroup>
                            <h3>Sept 10, 2018 Admin 3</h3>
                            <h2>The Delicous Pizza</h2>
                        </hgroup>
                        <p>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={BlogImg02} alt="blog-image-02" />
                    <figcaption>
                        <hgroup>
                            <h3>Sept 10, 2018 Admin 3</h3>
                            <h2>The Delicous Pizza</h2>
                        </hgroup>
                        <p>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={BlogImg03} alt="blog-image-03" />
                    <figcaption>
                        <hgroup>
                            <h3>Sept 10, 2018 Admin 3</h3>
                            <h2>The Delicous Pizza</h2>
                        </hgroup>
                        <p>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
                        </p>
                    </figcaption>
                </figure>
            </C.Container>
        </C.BlogContents>
    );
};
