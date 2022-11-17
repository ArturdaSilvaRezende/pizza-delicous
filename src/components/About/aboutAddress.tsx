import * as C from "./style";

export const AboutAddress = () => {
    return (
        <C.AboutAddress>
            <div>
                <span className="icon-phone"></span>
                <div className="description">
                    <p>000 (123) 456 7890</p>
                    <p>A small river named Duden flows</p>
                </div>
            </div>
            <div>
                <span className="icon-my_location"></span>
                <div className="description">
                    <p>198 West 21th Street</p>
                    <p>Suite 721 New York NY 10016</p>
                </div>
            </div>
            <div>
                <span className="icon-clock-o"></span>
                <div className="description">
                    <p>Open Monday-Friday</p>
                    <p>8:00am - 9:00pm</p>
                </div>
            </div>
        </C.AboutAddress>
    );
};
