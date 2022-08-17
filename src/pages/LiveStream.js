import SubTechBox from "./components/SubTechBox";
import im0 from "../assets/tech/Group17.svg";
import im1 from "../assets/tech/Group4.svg";
import im2 from "../assets/tech/Group5.svg";
import im4 from "../assets/tech/Group6.svg";
import im5 from "../assets/tech/Group7.svg";
import im6 from "../assets/tech/Group8.svg";
import im3 from "../assets/tech/Group9.svg";
import im7 from "../assets/tech/Group422.svg";

export default function LiveStream() {
    const techSupport1 = [
        {
        title: "Broadcasting to YouTube, Zoom, or MS Teams",
        image: im6},
        {
        title: "On-site and remote technical support",
        image: im3},
        {
        title: "Availability across the St. George campus",
        image: im5},
    ]
    const techSupport2 = [
        {
        title: "Delivering audio and video technology to location",
        image: im4},
        {
        title: "Larger scale event presentations",
        image: im2},
        {
        title: "Enabling Q&A sessions for broadcasting",
        image: im1}
    ]
    return <section>
            <div class="nav-cont-cap">
                <div class="nav-cont-text">
                    <h2>Live Stream Events</h2>
                    <p>Tech2U supports livestream for events of all sizes.</p>
                </div>
                <img src={im0} alt=""/>
            </div>
            <div class="mobile-body">
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
                <div class="feature2">
                    <h2>Features &amp; Specifications</h2>
                    <ul>
                        <li>High-quality streaming</li>
                        <li>Up to 10,000 participants</li>
                        <li>Recording for asynchronous viewing</li>
                        <li>Customizable technology delivery</li>
                    </ul>
                </div>
                {/* <img src={im7} alt=""/> */}
            </div>
    </section>
}
