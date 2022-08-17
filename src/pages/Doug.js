import im4 from "../assets/stories/a1.svg";
import { Link } from "react-router-dom";

export default function Doug() {
    return <section>
        <div class="stories-header-bx">
            <img src={im4} alt=""/>
            <div class="story-content-header">
                <div class="box-help">
                    <h2>Technology as a pathway to engagement </h2>
                    <p>Doug Richards<br/>
                    Faculty of Kinesiology & Physical Education</p>
                </div>
            </div>
        </div>
        <div class="find-help-info">
            <div class="find-help">
                <p class="help">
                    <b>Doug Richards</b> wanted to create an inclusive environment by being able to record his lectures along with his demonstrations of anatomical models. 
                </p>
                <h3>
                    Tech2U set him up with a PTZ camera that suited his creative lecture style by offering a tactile approach, and he was able to experiment with the technology to show physical demonstrations.
                    <div class="find-help-btn">
                <Link to="/contact">
                    <button class="help-btn">Have a similar problem? Get Tech2U Support</button>
                </Link>
            </div>
                </h3>
            </div>
        </div>
        <div class="help-info add-space">
            <h2>“For me, Tech2U was an opportunity to improve the quality of what I could record in the classroom for the students.” </h2>
            <p>
                Kinesiology and Physical Education professor Doug Richards wanted to record his lectures in a way that captured his physical demonstrations and use of anatomical models, like a show-and-tell section, but he was not sure how. When he reached out to Tech2U, the team addressed his concern about being able to seamlessly switch between his PowerPoint lecture and demonstrations on the screen at the front of the room, and in what was recorded for future viewing.
                <br/><br/>
                The Tech2U team supported Doug's creative lecture style by providing him with recording equipment that allowed him to confidently engage with his material. The PTZ camera was set up in the fourth row of the lecture theatre to enable a wide-angle capture of his demonstrations. Doug was also given a PTZ remote that gave him the freedom to switch between wide angle views for whole body demonstrations and zoomed-in views for demonstrations with anatomical models of the knee or shoulder. Doug reports that the support he received from Tech2U and his co-pilot helped him feel more comfortable with the technology required for his lectures, especially since everything was set up in advance. In fact, by the end of the term, Doug reported that Tech2U's work in providing technology for his lectures boosted his confidence and using it on his own “became second nature”. 
                <br/><br/>
                With Tech2U's assistance in simplifying the technology setup to familiarize Doug with the recording equipment, he noted being able to conduct his classes without any worry. Doug also reports that he received positive feedback from his students, who appreciated the way his lectures were recorded. Support from Tech2U was essential for Doug's lecture recordings because they eased his transition from hybrid and in-person learning, which was extremely valuable. Overall, Tech2U helped Doug improve the quality of his recordings and supported his engaging teaching practice. 
                <br/><br/>
                If you have similar needs or would like to know more about how Tech2U can best support your teaching, please contact the Tech2U team.
            </p>
        </div>
    </section>
}
