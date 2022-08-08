import SubTechBox from "./components/SubTechBox";
import im0 from "../assets/tech/d6.svg";
import im1 from "../assets/tech/d1.svg";
import im2 from "../assets/tech/d2.svg";
import im4 from "../assets/tech/d3.svg";
import im5 from "../assets/tech/d4.svg";
import im6 from "../assets/tech/d5.svg";
import im7 from "../assets/tech/Group422.svg";

export default function Wireless() {
    const techSupport1 = [
        {
        title: "Availability in both handheld and hands-free lavalier varieties",
        image: im0},
        {
        title: "Accessibility solution for the hearing impaired",
        image: im5},
        {
        title: "Panel discussions and Q&As via multiple mics",
        image: im4},
    ]
    const techSupport2 = [
        {
        title: "Compatibility with video conferencing software allowing clearer audio",
        image: im6},
        {
        title: "Broadcasting at high-volume so entire class can hear",
        image: im2}
    ]
    return <section>
            <div class="nav-info-mobile">
                <div class="box-mobile">
                    <h2>Wireless Microphones &amp; Speakers</h2>
                    <img src={im1} alt=""/>
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
                        <li>Three types of mics:
                            <ul>
                                <li>Wireless lavalier microphone</li>
                                <li>Wireless handheld microphones</li>
                                <li>Rode2Go wireless microphones</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <img src={im7} alt=""/>
            </div>
            </div>
    </section>
}
