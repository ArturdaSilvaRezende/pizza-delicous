import { TitleGlobal } from "../TitleGlobal";
import { BlogContents } from "./BlogContents";
import * as C from "./style";

export const Blog = () => {
    return (
        <C.Blog>
            <TitleGlobal
                title="Recent From Blog"
                colorTitle="var(--white)"
                colorSubTitle="var(--gray)"
            />
            <BlogContents />
        </C.Blog>
    );
};
