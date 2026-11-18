import { useState } from "react";
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    function handleSubmit(e) {
        e.preventDefault();

        if (name === "") {
            alert("Please Enter Your Name");
            return;
        }

        if (email === "") {
            alert("Please Enter Your Email");
            return;
        }
        if (!email.includes("@")) {
            alert("Please Enter Valid Email");
            return;
        }
        if (!email.includes(".com")) {
            alert("Please Enter Valid Email");
            return;
        }

        alert("Form Submitted Successfully!");
    }
    return (
        <section id="contact">
            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>Your Name: {name}</p>
                <br /><br />

                <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Your Email: {email}</p>
                <br /><br />

                <textarea placeholder="Enter Your Message"></textarea>
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;