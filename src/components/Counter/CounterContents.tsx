import CountUp from "react-countup";

import * as C from "./style";

export const CounterContents = () => {
    return (
        <C.CounterContents>
            <div className="overlay"></div>
            <C.Container>
                <div>
                    <p className="flaticon-pizza-1 counter__icon"></p>
                    <h3>
                        <CountUp enableScrollSpy={true} delay={4} end={300} />
                    </h3>
                    <p>Pizza Branches</p>
                </div>
                <div>
                    <p className="flaticon-medal counter__icon"></p>
                    <h3>
                        <CountUp enableScrollSpy={true} delay={4} end={100} />
                    </h3>
                    <p>Number of Awards</p>
                </div>
                <div>
                    <p className="flaticon-laugh counter__icon"></p>
                    <h3>
                        <CountUp enableScrollSpy={true} delay={4} end={10567} />
                    </h3>
                    <p>Happy Customer</p>
                </div>
                <div>
                    <p className="flaticon-chef counter__icon"></p>
                    <h3>
                        <CountUp enableScrollSpy={true} delay={4} end={900} />
                    </h3>
                    <p>Staff</p>
                </div>
            </C.Container>
        </C.CounterContents>
    );
};
