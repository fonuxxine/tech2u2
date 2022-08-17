import SubTechBox from "./components/SubTechBox";
import im0 from "../assets/tech/Group22.svg";
import im1 from "../assets/tech/a1.svg";
import im2 from "../assets/tech/a2.svg";
import im4 from "../assets/tech/a3.svg";
import im5 from "../assets/tech/a4.svg";
import im6 from "../assets/tech/a5.svg";
import im7 from "../assets/tech/Group422.svg";

export default function Camera() {
    const techSupport1 = [
        {
        title: "The next generation of overhead projectors",
        image: im1},
        {
        title: "Adding a tactile approach to annotation",
        image: im2},
        {
        title: "Handwritten notation, live experiments, demonstrations, etc.",
        image: im4},
    ]
    const techSupport2 = [
        {
        title: "Projecting high quality live feed into classroom through Zoom lens",
        image: im5},
        {
        title: "Using feed as video conferencing shared-screen or camera for dual delivery",
        image: im6}
    ]
    return <section>
            <div class="nav-info-mobile">
                <div class="box-mobile">
                    <h2>Document Camera</h2>
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
                        <li>Full HD 1080P camera</li>
                        <li>Enable viewers USB and HDMI Connectivity </li>
                        <li>Adjustable Arm</li>
                    </ul>
                </div>
                {/* <img src="" alt=""/> */}
            </div>
            </div>
    </section>
}
