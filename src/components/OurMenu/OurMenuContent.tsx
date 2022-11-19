import Pizza01 from "./images/pizza-1.jpg";
import Pizza02 from "./images/pizza-2.jpg";
import Pizza03 from "./images/pizza-3.jpg";
import Pizza04 from "./images/pizza-4.jpg";
import Pizza05 from "./images/pizza-5.jpg";
import Pizza06 from "./images/pizza-6.jpg";
import * as C from "./style";

export const OurMenuContent = () => {
    return (
        <C.OurMenuContent>
            {/* Figures - content on the right */}
            <figure>
                <img src={Pizza01} alt="Italian Pizza" />
                <figcaption>
                    <h3>Italian Pizza</h3>
                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia
                    </p>
                    <div>
                        <p>R$ 19,90</p>
                        <button>Order</button>
                    </div>
                </figcaption>
            </figure>
            <figure>
                <img src={Pizza02} alt="Greek Pizza" />
                <figcaption>
                    <h3>Greek Pizza</h3>
                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia
                    </p>
                    <div>
                        <p>R$ 19,90</p>
                        <button>Order</button>
                    </div>
                </figcaption>
            </figure>
            <figure>
                <img src={Pizza03} alt="Caucasian Pizza" />
                <figcaption>
                    <h3>Caucasian Pizza</h3>
                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia
                    </p>
                    <div>
                        <p>R$ 19,90</p>
                        <button>Order</button>
                    </div>
                </figcaption>
            </figure>

            {/* Figures - content on the left */}
            <figure className="figure__left">
                <figcaption>
                    <h3>American Pizza</h3>
                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia
                    </p>
                    <div>
                        <p>R$ 19,90</p>
                        <button>Order</button>
                    </div>
                </figcaption>
                <img src={Pizza04} alt="American Pizza" />
            </figure>
            <figure className="figure__left">
                <figcaption>
                    <h3>Tomatoe Pie</h3>
                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia
                    </p>
                    <div>
                        <p>R$ 19,90</p>
                        <button>Order</button>
                    </div>
                </figcaption>
                <img src={Pizza05} alt="Tomatoe Pie" />
            </figure>
            <figure className="figure__left">
                <figcaption>
                    <h3>Margherita</h3>
                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia
                    </p>
                    <div>
                        <p>R$ 19,90</p>
                        <button>Order</button>
                    </div>
                </figcaption>
                <img src={Pizza06} alt="Margherita" />
            </figure>
        </C.OurMenuContent>
    );
};
