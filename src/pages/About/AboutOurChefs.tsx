import { OurChefsList } from "./AboutOurChefsList";
import * as C from "./style";
import "./AboutStyle.css";

export const AboutOurChefs = () => {
    const ourChefs = OurChefsList;

    return (
        <C.AboutOurChefs>
            {ourChefs.map((item) => (
                <figure key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <figcaption>
                        <hgroup>
                            <h2>{item.name}</h2>
                            <h3>{item.office}</h3>
                        </hgroup>
                        <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                        </p>
                    </figcaption>
                </figure>
            ))}
        </C.AboutOurChefs>
    );
};
