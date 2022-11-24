import * as C from "./style";

type Props = {
    title: string;
    page: string;
};

export const Breadcrumb = (props: Props) => {
    return (
        <C.Breadcrumb>
            <div className="overlay"></div>
            <h1 className="breadcrumb__title">{props.title}</h1>
            <div className="breadcrumb__items">
                <a href="/">Home</a> <span>/</span> <p>{props.page}</p>
            </div>
        </C.Breadcrumb>
    );
};
