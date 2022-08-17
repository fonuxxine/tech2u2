import im3 from "../assets/stories/a3.svg";
import { Link } from "react-router-dom";

export default function Barbara() {
    return <section>
        <div class="stories-header-bx">
            <img src={im3} alt=""/>
            <div class="story-content-header">
                <div class="box-help">
                    <h2>Adapting to Unique Situations</h2>
                    <p>Barbara Ballyk<br/>
                    Temerty Faculty of Medicine</p>
                </div>
            </div>
        </div>
        <div class="find-help-info">
            <div class="find-help">
                <p class="help">
                    <b>Barbara Ballyk</b> needed help switching to a hybrid teaching model while maintaining high engagement in both environments.
                </p>
                <h3>
                    The problem was solved with an HDMI splitter, which allowed her to use several devices that each improved a different aspect of her delivery and maximized student engagement.
                    <div class="find-help-btn">
                <Link to="/contact">
                    <button class="help-btn">Have a similar problem? Get Tech2U Support</button>
                </Link>
            </div>
                </h3>
            </div>
        </div>
        <div class="help-info">
            <h2>“[My co-pilot] never left me starting a lecture without knowing that everything was working perfectly.”</h2>
            <p>
                Barbara Ballyk, associate Anatomy professor at the university for 20 years, had the specific technological challenge of offering engaging lessons that were optimal for dual delivery and knew she would need support. She developed a strong teaching approach focused on student engagement, which she hoped Tech2U would be able to support as she switched to hybrid teaching. Barbara noted an additional challenge was to ensure that her teaching method of annotating slides and adding text by hand was equally engaging for her students physically in the class and in virtual attendance. 
                <br/><br/>
                The Tech2U team set aside time to successfully address each technological challenge Barbara was facing. For instance, she was concerned about volume because she wanted to make sure she was adequately heard by both her remote and in-person students. She also hoped to show all students her annotations throughout the lecture. Initially, Tech2U ran into some problems because the equipment required involved connecting different cords to the Viewsonic Touchscreen, webcam, and teaching station at the same time. Eventually, the team figured out the HDMI splitter was the best solution, and Barbara was able to continue her lectures smoothly. With Tech2U's support, Barbara felt less anxious to start class and expressed gratitude in knowing that when she arrived everything was already set up and the only thing she had to focus on was her lecture. 
                <br/><br/>
                Barbara reports that by the end of the year, her students thanked Tech2U for dedicating so much effort to the technical aspect of the class. Tech2U also allowed Barbara to build a strong rapport with her co-pilot who attended every lecture to ensure smooth delivery, and she expressed learning a lot from him. Support from Tech2U gave Barbara security in knowing she could rely on her co-pilot for technological issues and be provided the space she needed to teach engaging lessons.
                <br/><br/>
                If you have similar needs or would like to know more about how Tech2U can best support your teaching, please contact the Tech2U team.
            </p>
        </div>
        <iframe class="video vid-sp" width="905" height="509" src="https://www.youtube.com/embed/zoKc7M-taIo" title="2022 07 27 BARBARA BALLYK STORY RC1 v1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
}
