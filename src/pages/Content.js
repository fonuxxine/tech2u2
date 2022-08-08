import SubTechBox from "./components/SubTechBox";
import im1 from "../assets/tech/Group16.svg";
import im2 from "../assets/tech/Group345.svg";
import im4 from "../assets/tech/Group351.svg";
import im5 from "../assets/tech/Group384.svg";
import im6 from "../assets/tech/Group386.svg";
import im3 from "../assets/tech/Group387.svg";
import im7 from "../assets/tech/Group422.svg";

export default function Audio() {
    const techSupport1 = [
        {
        title: "Allowing live streaming and recording",
        image: im5},
        {
        title: "Connecting to Quercus",
        image: im2},
        {
        title: "Capturing content in over 100 classrooms across St. George campus",
        image: im3},
    ]
    const techSupport2 = [
        {
        title: "Building-in dual delivery solution",
        image: im4},
        {
        title: "Recording accessible to students through MyMedia",
        image: im6}
    ]
    return <section>
            <div class="nav-info-cont-cap">
                <div class="nav-cont-cap">
                    <div class="nav-cont-text">
                        <h2>Content Capture</h2>
                        <p>Tech2U supports instructors in capturing content to share with students after class.</p>
                    </div>
                    <img src={im1} alt=""/>
                </div>
            </div>
            <div class="mobile-body">
                <h2>Can Help With...</h2>
                <div class="team-box">
                    <div class="team-set">
                        {
                            techSupport1.map(card => {
                                return (
                                    <SubTechBox title={card.title} image={card.image}/>
                                )
                            })
                        }
                    </div>
                    <div class="team-set">
                        {
                            techSupport2.map(card => {
                                return (
                                    <SubTechBox title={card.title} image={card.image}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div class="feature-vid">
                <div class="feature">
                    <h2>Features &amp; Specifications</h2>
                    <ul>
                        <li>Editing suite</li>
                        <li>Auto-posting</li>
                        <li>Simple setup</li>
                    </ul>
                </div>
                <img src={im7} alt=""/>
            </div>
    </section>
}
