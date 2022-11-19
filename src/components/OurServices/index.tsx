import { TitleGlobal } from "../titleGlobal";
import * as C from "./style";

export const OurServices = () => {
    return (
        <C.OurServices>
            <TitleGlobal
                title="Our Services"
                colorTitle="var(--color-icons)"
                colorSubTitle="var(--color-icons)"
            />
            <C.Container>
                <div>
                    <span className="flaticon-diet"></span>
                    <h4>Healthy Foods</h4>
                    <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic.
                    </p>
                </div>
                <div>
                    <span className="flaticon-bicycle"></span>
                    <h4>Fastest Delivery</h4>
                    <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic.
                    </p>
                </div>
                <div>
                    <span className="flaticon-pizza-1"></span>
                    <h4>Original Recipes</h4>
                    <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic.
                    </p>
                </div>
            </C.Container>
        </C.OurServices>
    );
};
