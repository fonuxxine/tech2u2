import { Link } from "react-router-dom";
import bannerImg from '../assets/home/Group415.svg';
import img1 from '../assets/home/Group379.svg';
import img2 from '../assets/home/Group424.svg';
import img3 from '../assets/home/Lines.svg';
import img4 from '../assets/home/Group16.svg';

export default function Home() {
    return <section>
        <div class="nav-info">
            <div class="nav-text box-about2">
                <h2>Humanizing Classroom Technical Support</h2>
                <p>Fostering excellent and innovative teaching and learning in an increasingly technological classroom</p>
                <Link to="/contact">
                    <button class="btn-landing">Tech2U Support</button>
                </Link>
            </div>
            <img class="nav-p" src={bannerImg} alt=""/>
        </div>
        <div class="about-info">
            <div class="about-tech2u">
                <img class="about-tech2u" src={img2} alt=""/>
            </div>
            <div class="about-p">
                <p>The program provides real-time, personalized technical support for instructors by a trained team of students and seasoned technicians.</p>
                <Link to="/about" class="about-link">Learn More about Tech2U</Link>
            </div>
        </div>
        <div class="overview-info">
            <div class="about-tech2u">
                <img src={img1} alt=""/>
            </div>
            <div class="about-p">
                <p>Tech2U offers real-time, personalized tech support in the classroom from a technical support team. We strive to help instructors focus on teaching and leave the technology to us!</p>
                <Link to="/technology" class="about-link">
                    Learn More about the Technology
                </Link>
            </div>
        </div>
        <div class="about-info">
            <div class="about-tech2u">
                <img src={img3} alt=""/>
            </div>
            <div class="about-p">
                <p>Tech2U supports classroom accessibility by enabling participation for students who require remote accommodation and by offering instructors the flexibility of teaching from home or campus.</p>
                <Link to="/accessibility" class="about-link">
                    Learn More about Accessibility
                </Link>
            </div>
        </div>
        <div class="stories-info">
            <span>
                <p class="stories-sm">Shirley Yeung, Faculty of Arts and Science</p>
                <p class="stories-p">
                    The Tech2U team was really, really crucial in helping me navigate the big unknowns.
                </p>
                <Link to="/stories" class="stories-link">Read More Stories</Link>
            </span>
            <img src={img4} alt=""/>
        </div>
        <iframe class="video" width="853" height="505" src="https://www.youtube.com/embed/wURVzAPlU20" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="contact-info">
            <p class="contact-p">Are you looking to learn more about whether Tech2U is for you? <br/> Get in touch with us, we&#8217;d love to hear from you!</p>
            <Link to="/contact" class="contact-link">Contact Us</Link>
        </div>
    </section>
}