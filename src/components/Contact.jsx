
import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === "") {
            alert("Please Enter Your Name");
            return;
        }

        if (email.trim() === "") {
            alert("Please Enter Your Email");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please Enter Valid Email");
            return;
        }

        if (message.trim() === "") {
            alert("Please Enter Your Message");
            return;
        }

        alert("Form Submitted Successfully!");

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                    placeholder="Enter Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
