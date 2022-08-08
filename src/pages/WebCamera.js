import SubTechBox from "./components/SubTechBox";
import im0 from "../assets/tech/Group25.svg";
import im1 from "../assets/tech/e1.svg";
import im2 from "../assets/tech/e2.svg";
import im4 from "../assets/tech/e3.svg";
import im5 from "../assets/tech/e4.svg";
import im6 from "../assets/tech/e5.svg";
import im7 from "../assets/tech/Group422.svg";

export default function WebCamera() {
    const techSupport1 = [
        {
        title: "Dual delivery forward",
        image: im6},
        {
        title: "Compatibility with all video conferencing software (MSTeams, Zoom, etc.)",
        image: im1},
        {
        title: "High quality imaging",
        image: im5},
    ]
    const techSupport2 = [
        {
        title: "Clear audio",
        image: im2},
        {
        title: "Fast setup",
        image: im4}
    ]
    return <section>
            <div class="nav-info-mobile">
                <div class="box-mobile">
                    <h2>Web Camera</h2>
                    <img src={im0} alt=""/>
                </div>
            <div class="mobile-body2">
                <div class="team-box">
                    <div class="team-set">
                        {
                            techSupport1.map(card => {
                                return (
                                    <SubTechBox title={card.title} image={card.image} link={card.link}/>
                                )
                            })
                        }
                    </div>
                    <div class="team-set">
                        {
                            techSupport2.map(card => {
                                return (
                                    <SubTechBox title={card.title} image={card.image} link={card.link}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div class="feature-vid2">
                <div class="feature2">
                    <h2>Features &amp; Specifications</h2>
                    <ul>
                        <li>Logitech C390e Webcam
                            <ul>
                                <li>Instructor facing HD 1080 camera </li>
                                <li>Autofocus</li>
                                <li>Provided mount device for webcam </li>
                                <li>Built in microphone</li>
                                <li>Standard USB plug</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <img src={im7} alt=""/>
            </div>
            </div>
    </section>
}
