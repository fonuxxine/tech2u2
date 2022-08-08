import img1 from "../assets/about/Group379.svg";
import img2 from "../assets/about/Group380.svg";
import img3 from "../assets/about/Group381.svg";
import img4 from "../assets/about/Group382.svg";
import img5 from "../assets/about/Group383-1.svg";
import img6 from "../assets/about/Group383.svg";
import img7 from "../assets/about/Group384.svg";
import img8 from "../assets/about/Group420.svg";
import img9 from "../assets/about/Group421.svg";
import img10 from "../assets/about/Group424.svg";
import img11 from "../assets/about/rp.svg";
import icon1 from "../assets/about/image11.svg";
import icon2 from "../assets/about/image12.svg";
import icon3 from "../assets/about/image13.svg";
import icon4 from "../assets/about/image14.svg";
import icon5 from "../assets/about/image15.svg";
import icon6 from "../assets/about/image16.svg";
import icon7 from "../assets/about/image17.svg";
import icon8 from "../assets/about/image18.svg";
import icon9 from "../assets/about/image19.svg";

export default function About() {
    return <section>
    <div class="nav-info-about">
        <div class="nav-text box-about3">
            <h2>What is Tech2U?</h2>
            <p>The Tech2U program humanizes classroom technical support to foster excellent and innovative teaching
                and learning in an
                increasingly technological classroom. The program provides real-time, personalized technical support
                for instructors by
                a trained team of students and seasoned technicians.</p>
        </div>
        <img class="nav-p-abt" src={img10} alt=""/>
    </div>
    <div class="services">
        <div class="our-service">
            <h2>Our Services</h2>
            <p className="ser-mar">Tech2U understands that juggling technology in a classroom while focusing on teaching can be challenging. We strive to help instructors focus on teaching and leave the technology to us!</p>
            <div class="service-icon">
                <div class="icon-set">
                    <img src={img3} alt=""/>
                    <p><b>Submit </b>
                        a direct request for classroom support using the Instructor Portal.</p>
                </div>
                <div class="icon-set">
                    <img src={img4} alt=""/>
                    <p><b>Receive </b>
                        ongoing in-room technical support.</p>
                </div>
                <div class="icon-set">
                    <img src={img6} alt=""/>
                    <p><b>Select </b>
                        from a wide range of technology options that can be delivered to the classroom to fit unique
                        teaching needs.
                    </p>
                </div>
                <div class="icon-set">
                    <img src={img7} alt=""/>
                    <p><b>Learn </b>
                        from the <a href="./stories-page/stories.html">stories</a> of other instructors.</p>
                </div>
            </div>
            <div class="service-text">
                <p>Tech2U is offered across centrally managed U of T classrooms at the St. George Campus. The program runs year-round to provide in-class technical support to instructors.</p>
                <img src={img11} alt=""/>
            </div>
        </div>
        <div class="team">
            <h2>Our Services</h2>
            <p class="team-fr-text">Tech2U understands that juggling technology in a classroom while focusing on teaching can be challenging. We strive to help instructors focus on teaching and leave the technology to us!</p>
            <div class="n-team-list">
                <div class="n-team-card">
                    <img src={img5} alt=""/>
                    <div class="n-card-text">
                        <h3>Student Experience Coordinator</h3>
                        <p>I hire, coach and train our team of student Classroom Ambassadors who provide hands-on support to instructors.</p>
                    </div>
                </div>
                <div class="n-team-card">
                    <img src={img1} alt=""/>
                    <div class="n-card-text">
                        <h3>Instructional Support Coordinator</h3>
                        <p>I schedule the technical support team for Tech2U services and ensure ongoing communication
                            between all team members to
                            ensure each instructor receives great service.</p>
                    </div>
                </div>
                <div class="n-team-card">
                    <img src={img2} alt=""/>
                    <div class="n-card-text">
                        <h3>Technical Co-Pilots</h3>
                        <p>We provide direct mentorship to Classroom Ambassadors and direct technical support to
                            instructors for more complex tech
                            setups. We oversee the smooth operations of Tech2U from building to building to ensure
                            instructors have great service.</p>
                    </div>
                </div>
                <div class="n-team-card">
                    <img src={img8} alt=""/>
                    <div class="n-card-text">
                        <h3>Student Classroom Ambassadors</h3>
                        <p>We are work-study students that offer on-site support to instructors by troubleshooting
                            technical issues in the
                            classroom. We're learning so much through this experience!</p>
                    </div>
                </div>
                <div class="n-team-card">
                    <img src={img9} alt=""/>
                    <div class="n-card-text">
                        <h3>Multimedia Support</h3>
                        <p>We provide direct mentorship to Classroom Ambassadors and direct technical support to
                            instructors for more complex tech
                            setups. We oversee the smooth operations of Tech2U from building to building to ensure
                            instructors have great service.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tech2u-impact">
            <h2>Tech2U Impact</h2>
            <p>Tech2U supports instructors with technology so they can focus on teaching. <br/> To date, Tech2U has
                supported:</p>
            <div class="impact-data">
                <div class="impact-set">
                    <div class="impact-img">
                        <img src={icon7} alt=""/>
                    </div>
                    <p>3,862 Instructors</p>
                </div>
                <div class="impact-set">
                    <div class="impact-img">
                        <img src={icon8} alt=""/>
                    </div>
                    <p>285 Classrooms</p>
                </div>
                <div class="impact-set">
                    <div class="impact-img">
                        <img src={icon9} alt=""/>
                    </div>
                    <p>9,935 Course Sections</p>
                </div>
            </div>
            <h2>Benefits to Instructors</h2>
            <div class="impact-data">
                <div class="impact-set">
                    <div class="impact-img">
                        <img src={icon1} alt=""/>
                    </div>
                    <p>Hands-on Troubleshooting</p>
                </div>
                <div class="impact-set">
                    <div class="impact-img">
                        <img src={icon2} alt=""/>
                    </div>
                    <p>Individualized Support</p>
                </div>
                <div class="impact-set">
                    <div class="impact-img">
                        <img src={icon3} alt=""/>
                    </div>
                    <p>Equipment Delivery  Setup</p>
                </div>
            </div>
            <div class="impact-data">
                <div class="impact-set">
                    <div class="impact-img">
                        <img src={icon4} alt=""/>
                    </div>
                    <p>On-site Support</p>
                </div>
                <div class="impact-set">
                    <div class="impact-img">
                        <img src={icon5} alt=""/>
                    </div>
                    <p>Focus on Teaching, Not Technology</p>
                </div>
                <div class="impact-set">
                    <div class="impact-img">
                        <img src={icon6} alt=""/>
                    </div>
                    <p>Supporting Dual Delivery</p>
                </div>
            </div>
            <p class="centre">Hear how Tech2U has positively impacted instructors and listen to their <a
                    href="./stories-page/stories.html">stories</a>!</p>
            <div class="book-info">
                <a href="https://lsm.utoronto.ca/lsm_portal" target="_blank" rel="noreferrer">
                    <button class="btn-tech">Book Tech2U Support</button>
                </a>
            </div>
        </div>
    </div>
</section>
}
