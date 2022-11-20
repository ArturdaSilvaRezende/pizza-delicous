import * as C from "./style";
type Props = {
    title: string;
    colorTitle: string;
    colorSubTitle: string;
};

export const TitleGlobal = (props: Props) => {
    return (
        <C.TitleGlobal
            colorTitle={props.colorTitle}
            colorSubTitle={props.colorSubTitle}
        >
            <h1>{props.title}</h1>
            <h4>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
            </h4>
        </C.TitleGlobal>
    );
};
