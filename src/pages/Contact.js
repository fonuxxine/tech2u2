import im1 from "../assets/contact/Group477.svg";
import im5 from "../assets/contact/Group493.svg";
import im2 from "../assets/contact/Group486.svg";
import im6 from "../assets/contact/Group487.svg";
import im7 from "../assets/contact/Group363-3.svg";

export default function Contact() {
    return <section>
        <div class="contact-body">
            <div class="contact-text">
                <h2>Contact Us</h2>
            </div>
        </div>

    <section class="quest-sec">
        <div class="login-quest">
            <a href="#book" class="quest-box">
                <img class="quest-img" src={im1} alt=""/>
                <h3>I am ready to book Tech Support</h3>
            </a>
            <a href="#tap" class="quest-box">
                <img class="quest-img" src={im5} alt=""/>
                <h3>I have more questions</h3>
            </a>
        </div>
        <h2>I am ready to book Tech Support</h2>
        <div className="contact-part">
            <div className="part">
                <img class="quest-img" src={im2} alt=""/>
                <p>1. Login to the LSM Portal</p>
            </div>
            <div className="part">
                <img class="quest-img" src={im6} alt=""/>
                <p>2. Visit My Classrooms</p>
            </div>
            <div className="part">
                <img class="quest-img" src={im7} alt=""/>
                <p>3. Learn more about each classroom and request support</p>
            </div>
        </div>
        <div id="book" class="centre-btn">
            <button class="contact-btn">Login to the Instructor Portal</button>
        </div>
    </section>
    <div id="tap form">
        <form class="contact-form" action="">
            <div class="contact-name">
                <div class="field first-name">
                    <p>First Name</p>
                    <input type="text"/>
                </div>
                <div class="field">
                    <p>Last Name</p>
                    <input type="text"/>
                </div>
            </div>
            <div class="field">
                <p>Email Address</p>
                <input type="text"/>
            </div>
            <div class="field">
                <p>Phone Number</p>
                <input type="text"/>
            </div>
            <div class="field message">
                <p>Message</p>
                <textarea id="subject" name="subject"></textarea>
            </div>
            <div class="centre-btn">
                <button class="contact-btn">Send Message</button>
            </div>
        </form>
    </div>
    </section>
}