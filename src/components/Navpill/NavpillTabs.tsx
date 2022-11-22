import * as C from "./style";

type Props = {
    openTab: string;
    setOpenTab: React.Dispatch<React.SetStateAction<string>>;
};

export const NavpillTabs = (props: Props) => {
    return (
        <C.NavpillTabs>
            <ul>
                <li
                    className={props.openTab === "pizza" ? "active" : ""}
                    onClick={() => props.setOpenTab("pizza")}
                >
                    Pizza
                </li>
                <li
                    className={props.openTab === "drink" ? "active" : ""}
                    onClick={() => props.setOpenTab("drink")}
                >
                    Drinks
                </li>
                <li
                    className={props.openTab === "burger" ? "active" : ""}
                    onClick={() => props.setOpenTab("burger")}
                >
                    Burgers
                </li>
                <li
                    className={props.openTab === "pasta" ? "active" : ""}
                    onClick={() => props.setOpenTab("pasta")}
                >
                    Pasta
                </li>
            </ul>
        </C.NavpillTabs>
    );
};
