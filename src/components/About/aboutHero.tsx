import AboutHeroImg from "./images/about.jpg";
import * as C from "./style";

export const AboutHero = () => {
    return (
        <C.AboutHero>
            <img src={AboutHeroImg} alt="about-hero" />
            <figcaption>
                <h1>
                    Welcome To <span className="flaticon-pizza"></span>{" "}
                    <span>Pizza</span> a Restaurant
                </h1>
                <p>
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word and and the Little Blind Text should turn
                    around and return to its own, safe country.
                </p>
            </figcaption>
        </C.AboutHero>
    );
};
