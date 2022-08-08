import { useState } from "react";
import im1 from "../assets/contact/Group1.svg";
import im2 from "../assets/contact/Group2.svg";
import im3 from "../assets/contact/Vector-5.svg";
import im4 from "../assets/contact/Vector-6.svg";

export default function Contact() {
    const [show, setShow] = useState(false);
    var arrow = document.getElementById('arrow');
    var blankForm = document.getElementById('tap');
    
    return <section>
        <div class="contact-body">
            <div class="contact-text">
                <h2>Contact Us</h2>
                <div class="contact-list">
                    <p>Are you looking to learn more about whether Tech2U is for you? Get in touch with us, we'd love to hear
                        from you!</p>
                    {/* <ul>
                            <li>Insert Instructions on how to login in</li>
                            <li>Insert Instructions on how to login in</li>
                            <li>Insert Instructions on how to login in</li>
                            <li>Insert Instructions on how to login in</li>
                            <li>Insert Instructions on how to login in</li>
                        </ul> */}
                    <button class="contact-btn">Login to the Instructor Portal</button>
                </div>
            </div>
            <img src={im1} alt=""/>
        </div>

    <section  class="quest-sec">
        <h3>As an Instructor, are you registered on the HR/ROSI platform?</h3>
        <div class="login-quest">
            <div class="quest-box">
                <p>Yes - Login to instructor portal</p>
                <ul>
                    <li>Choose the applicable term and then click 'Go to show the instructor's current courses and their
                        sections.'</li>
                    <li>Click to request AV support, Under the AV Support column, press for the course section where tech
                        support is needed.</li>
                    <li>Answer the questions presented in the AV Support pop-up form and click "submit"</li>
                </ul>
            </div>
            <img class="quest-img" src={im2} alt=""/>
            <div class="quest-box">
                <p>No - Send an email request to lsm.tech2U@utoronto.ca with the following details:</p>
                <ul>
                    <li>Which courses and course sections to request classroom tech equipment
                    </li>
                    <li>What classroom tech equipment would they like for the course(s). Learn more about each classroom tech equipment here: Technology</li>
                </ul>
            </div>
        </div>
    </section>
    <div class="question">
        <p class="question-title">Questions about Tech2U, connect with Tech2U and we are happy to help you!</p>
        <p class="question-contact"><b>Email Us</b></p>
        <a href="#contact_footer">
            <img id="arrow" src={im3} alt="" onClick={e => {
        if (blankForm.style.display === 'none') {
            blankForm.style.display = 'block';
            arrow.src = {im3};
        } else {
            blankForm.style.display = 'none';
            arrow.src = {im4};
        }
    }}/>
        </a>
    </div>
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