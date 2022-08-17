import SubTechBox from "./components/SubTechBox";
import im0 from "../assets/tech/Group23.svg";
import im1 from "../assets/tech/b1.svg";
import im2 from "../assets/tech/b2.svg";
import im4 from "../assets/tech/b3.svg";
import im5 from "../assets/tech/b4.svg";
import im6 from "../assets/tech/b0.svg";

export default function TouchScreen() {
    const techSupport1 = [
        {
        title: "Compatibility with PowerPoint, Zoom, etc.",
        image: im6},
        {
        title: "Providing eco-friendly replacement of physical whiteboards",
        image: im1},
        {
        title: "Perfect for handwritten notation, live experiments, demonstrations, etc.",
        image: im2},
    ]
    const techSupport2 = [
        {
        title: "Acting as extended display",
        image: im4},
        {
        title: "Providing clearer notation both in-class and online for accessibility purposes",
        image: im5}
    ]
    return <section>
            <div class="nav-info-mobile">
                <div class="box-mobile">
                    <h2>Touch Screen Annotation Display</h2>
                    <img src={im0} alt=""/>
                </div>
            <div class="mobile-body2">
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
            <div class="feature-vid2">
                <div class="feature2">
                    <h2>Features &amp; Specifications</h2>
                    <ul>
                        <li>Advanced Touch Capabilities</li>
                        <li>USB and HDMI Connectivity</li>
                        <li>Adjustable Stand</li>
                    </ul>
                </div>
                <iframe className="tech-vid-sp" width="489" height="350" src="https://www.youtube.com/embed/N7R3LBu1QCQ" title="Tech2U Feature Video: Annotatable Touchscreen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
    </section>
}
