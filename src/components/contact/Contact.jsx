import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>
            <form action="https://api.web3forms.com/submit" method="POST">
                <div className="input-box">
                    <input type="hidden" name="access_key" value="99942ba4-55da-460d-9c24-8919d7bdb082" />
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="number" name="phoneNumber" placeholder="Phone Number" required />
                    <input type="text" name="subject" placeholder="Subject" />
                </div>
                <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>       
    );
};

export default Contact;
