import {
    NavpillBurger,
    NavpillDrink,
    NavpillPasta,
    NavpillPizza,
} from "./NavpillList";
import * as C from "./style";

type Props = {
    openTab: string;
};

export const NavpillContents = (props: Props) => {
    const NavpillPizzaList = NavpillPizza;
    const NavpillDrinkList = NavpillDrink;
    const NavpillBurgerList = NavpillBurger;
    const NavpillPastaList = NavpillPasta;

    return (
        <C.NavpillContents>
            {/* Tab - pizza */}
            <div
                className={`navpill__tab ${
                    props.openTab === "pizza" ? "fadeIn" : "displayNone"
                }`}
            >
                {NavpillPizzaList.map((item) => (
                    <figure key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <figcaption>
                            <h3>{item.title}</h3>
                            <p className="navpill__description">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                            </p>
                            <p className="navpill__price">{item.price}</p>
                            <button>add to card</button>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Tab - drink */}
            <div
                className={`navpill__tab ${
                    props.openTab === "drink" ? "fadeIn" : "displayNone"
                }`}
            >
                {NavpillDrinkList.map((item) => (
                    <figure key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <figcaption>
                            <h3>{item.title}</h3>
                            <p className="navpill__description">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                            </p>
                            <p className="navpill__price">{item.price}</p>
                            <button>add to card</button>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Tab - burger */}
            <div
                className={`navpill__tab ${
                    props.openTab === "burger" ? "fadeIn" : "displayNone"
                }`}
            >
                {NavpillBurgerList.map((item) => (
                    <figure key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <figcaption>
                            <h3>{item.title}</h3>
                            <p className="navpill__description">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                            </p>
                            <p className="navpill__price">{item.price}</p>
                            <button>add to card</button>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Tab - pasta */}
            <div
                className={`navpill__tab ${
                    props.openTab === "pasta" ? "fadeIn" : "displayNone"
                }`}
            >
                {NavpillPastaList.map((item) => (
                    <figure key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <figcaption>
                            <h3>{item.title}</h3>
                            <p className="navpill__description">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia.
                            </p>
                            <p className="navpill__price">{item.price}</p>
                            <button>add to card</button>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </C.NavpillContents>
    );
};
