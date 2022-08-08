import SubTechBox from "./components/SubTechBox";
import im0 from "../assets/tech/Group18.svg";
import im1 from "../assets/tech/Group10.svg";
import im2 from "../assets/tech/Group11.svg";
import im4 from "../assets/tech/Group12.svg";
import im5 from "../assets/tech/Group13.svg";
import im6 from "../assets/tech/Group14.svg";
import im7 from "../assets/tech/Group422.svg";

export default function Studio() {
    const techSupport1 = [
        {
        title: "Producing content for asynchronous viewing",
        image: im1},
        {
        title: "High-quality lecture recording and audio capture",
        image: im2},
        {
        title: "On-site support for recording process",
        image: im5},
    ]
    const techSupport2 = [
        {
        title: "Customizable tailored approach to fit instructors' needs",
        image: im4},
        {
        title: "Voice-over recording ",
        image: im6}
    ]
    return <section>
            <div class="nav-info-cont-cap">
                <div class="nav-cont-cap">
                    <div class="nav-cont-text">
                        <h2>Live Stream Events</h2>
                        <p>Tech2U supports livestream for events of all sizes.</p>
                    </div>
                    <img src={im0} alt=""/>
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
                        <li>4K video camera</li>
                        <li>Dedicated studio environment</li>
                        <li>Professional lighting and green screen</li>
                        <li>Editing service</li>
                        <li>Vocal booth</li>
                        <li>Next day delivery</li>
                    </ul>
                </div>
                <img src={im7} alt=""/>
            </div>
    </section>
}
