import im4 from "../assets/stories/a4.svg";
import { Link } from "react-router-dom";

export default function Shirley() {
    return <section>
        <div class="stories-header-bx">
            <img src={im4} alt=""/>
            <div class="story-content-header">
                <div class="box-help">
                    <h2>Empowering a First Time Instructor</h2>
                    <p>Shirley Yeung <br/>
                    Faculty of Arts and Science</p>
                </div>
            </div>
        </div>
        <div class="find-help-info">
            <div class="find-help">
                <p class="help">
                    <b>Shirley Yeung</b> needed help setting up classroom technology to support her goal of teaching dual delivery classes.
                </p>
                <h3>
                    Tech2U provided Shirley with a video conferencing soundbar that enabled dual delivery to capture her entire teaching
                    area, allowing for more animated presentations.
                    <div class="find-help-btn">
                <Link to="/contact">
                    <button class="help-btn">Have a similar problem? Get Tech2U Support</button>
                </Link>
            </div>
                </h3>
            </div>
        </div>
        <div class="help-info add-space">
            <h2>“The Tech2U team was really, really crucial in helping me navigate the big unknowns”</h2>
            <p>
                Shirley Yeung, a first-time instructor at the University of Toronto, found it overwhelming to navigate through the
                classroom setting and had anxieties surrounding access to support. These anxieties began impacting her teaching, and
                eventually raised concerns about the quality of her instruction as the University shifts back to primarily in-person
                delivery. She wanted to learn about the teaching options available to her, and the options she could make available to
                her students. This assistant professor wanted to offer her classes in a dual delivery style but was unsure of how to go
                about setting up a dual environment and who to ask for help. Shirley notes that knowing what was possible was a struggle
                that Tech2U addressed.
                <br/><br/>
                The solution provided to her by the Tech2U team was a piece of technology, the Yamaha CS-700, that allowed her to
                provide her virtual audience with a view of their instructor as well as the students in the room. The Yamaha setup
                allowed her slides to be centralized on her primary device and provided her with an optimal microphone to speak to both
                her in-person and virtual students. Shirley reports that the work of the Tech2U team normalizes accessibility for both
                the instructor and student. Not only did she receive the support she needed, but that support also resulted in her
                creating channels of access for students. She strives to create accessible learning environments regardless of who needs
                it and aims to provide them as a default.
                <br/><br/>
                The technological expertise, support, and equipment that the team brings allows students to focus on content and
                creativity rather than the punitive impacts of missing lectures. Tech2U provided Shirley not only with hands-on
                technical support, but also a direct contact to go to when in need of any assistance. The University has a multitude of
                resources that can be complicated to navigate through, especially for a first-time instructor, so Shirley appreciates
                that Tech2U provides such valuable assistance and support.
                <br/><br/>
                If you have similar needs or would like to know more about how Tech2U can best support your teaching, please contact the
                Tech2U team.
            </p>
        </div>
    </section>
}
