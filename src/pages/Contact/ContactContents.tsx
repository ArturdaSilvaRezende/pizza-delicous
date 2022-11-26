import * as C from "./style";

export const ContactContents = () => {
    return (
        <C.ContactContents>
            <div className="contact-information">
                <h1>Contact Information</h1>
                <p>
                    <span>Address: </span>198 West 21th Street, Suite 721 New
                    York NY 10016
                </p>
                <p>
                    <span>Phone:</span> + 1235 2355 98
                </p>
                <p>
                    <span>Email: </span> info@yoursite.com
                </p>
                <p>
                    <span>Website: </span> pizzadelicous@gmail.com
                </p>
            </div>
            <form>
                <div>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="input-subject"
                    required
                />
                <textarea rows={10} cols={50} placeholder="Message" required />
                <button type="submit">Send Message</button>
            </form>
        </C.ContactContents>
    );
};
