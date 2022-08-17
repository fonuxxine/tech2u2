import im5 from "../assets/stories/a5.svg";
import { Link } from "react-router-dom";

export default function Steve() {
    return <section>
        <div class="stories-header-bx">
            <img src={im5} alt=""/>
            <div class="story-content-header">
                <div class="box-help">
                    <h2>Connecting Students on a Global Scale</h2>
                    <p>Steven Treiber<br/>
                    Faculty of Applied Science & Engineering</p>
                </div>
            </div>
        </div>
        <div class="find-help-info">
            <div class="find-help">
                <p class="help">
                    <b>Steven Treiber</b> wanted to diversify lecture content by allowing guest lecturers and students to join from anywhere in the world.
                </p>
                <h3>
                    Steven Treiber wanted to diversify lecture content by allowing guest lecturers and students to join from anywhere in the world.
                    <div class="find-help-btn">
                <Link to="/contact">
                    <button class="help-btn">Have a similar problem? Get Tech2U Support</button>
                </Link>
            </div>
                </h3>
            </div>
        </div>
        <div class="help-info">
            <h2>"Our view of what we're supposed to be doing has changed, the view of education has changed, and what our job is has changed."</h2>
            <p>
                Steven Treiber, sessional lecturer in the Department of Chemical Engineering and Applied Chemistry, needed technology that would support his flipped-format class which included using a combination of live and recorded sessions with students in Canada, China, and across Europe. Unique to Steven's teaching, he wanted to incorporate a guest lecturer in San Francisco. Additionally, he struggled to manage the sound quality of his lectures, which was a key aspect to providing an immersive classroom experience. 
                <br/><br/>
                Steven was able to enhance students' learning and innovate his teaching style with the help of Tech2U. Students and guest speakers were able to connect on a global scale with the newly installed Point, Tilt, Zoom (PTZ) camera, which allowed students in the classroom to interact with those outside. Tech2U installed the technology to improve audio by creating a stimulating and accessible learning environment. This was extremely important for students, as a few took the course because the timing would permit them to graduate early, and others told him the remote factor was important because they would be out of the country.  
                <br/><br/>
                Steven explained that Tech2U was able to help him realize his teaching goals and inspire students to interact with each other. The support Steven received from Tech2U helped him clarify his technical teaching needs and gave him space to innovate his teaching moving forward. 
                <br/><br/>
                If you have similar needs or would like to know more about how Tech2U can best support your teaching, please contact the Tech2U team.
            </p>
        </div>
        <iframe class="video vid-sp" width="905" height="509" src="https://www.youtube.com/embed/Y3LnNnYmDno" title="2022 08 10 STEVE TREIBER CC1 v2 ALT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
}
