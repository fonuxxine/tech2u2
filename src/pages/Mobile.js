import SubTechBox from "./components/SubTechBox";
import im0 from "../assets/tech/Group0.svg";
import im1 from "../assets/tech/Group1.svg";
import im2 from "../assets/tech/Group2.svg";
import im4 from "../assets/tech/Group3.svg";
import im5 from "../assets/tech/Layer.svg";
import im6 from "../assets/tech/Group21.svg";
import im7 from "../assets/tech/Group422.svg";

export default function Mobile() {
    const techSupport1 = [
        {
        title: "Upgrading classrooms without built-in PCs",
        image: im0},
        {
        title: "Compatibility with USB thumb drives via plug and play system",
        image: im1},
        {
        title: "Eco-Friendly annotative touchscreen replaces the need for whiteboards",
        image: im2},
    ]
    const techSupport2 = [
        {
        title: "Accessibility, both in ergonomic design and dual-delivery focus",
        image: im5},
        {
        title: " Availability with both Windows and Mac Operating Systems",
        image: im4}
    ]
    return <section>
            <div class="nav-info-mobile">
                <div class="box-mobile">
                    <h2>Tech2U Mobile PC Station</h2>
                    <img src={im6} alt=""/>
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
                        <li>Annotatable Touch Screen</li>
                        <li>Webcam &amp; Microphone</li>
                        <li>USB Inputs</li>
                        <li>Ergonomic Adjustable Stand </li>
                    </ul>
                </div>
                <img src={im7} alt=""/>
            </div>
            </div>
    </section>
}
