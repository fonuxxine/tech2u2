import SubTechBox from "./components/SubTechBox";
import im0 from "../assets/tech/Group24.svg";
import im1 from "../assets/tech/c1.svg";
import im2 from "../assets/tech/c2.svg";
import im4 from "../assets/tech/c3.svg";
import im5 from "../assets/tech/c4.svg";
import im6 from "../assets/tech/c5.svg";

export default function VideoConference() {
    const techSupport1 = [
        {
        title: "Dual delivery forward design",
        image: im2},
        {
        title: "Capturing full group discussions",
        image: im1},
        {
        title: "Allowing more animated presentations by capturing entire teaching area",
        image: im5},
    ]
    const techSupport2 = [
        {
        title: "Audio capture via array microphone in small and medium classrooms",
        image: im6},
        {
        title: "Allowing for on-the-fly camera adjustments, light and adjustable",
        image: im4}
    ]
    return <section>
            <div class="nav-info-mobile">
                <div class="box-mobile">
                    <h2>Video Conferencing Sound Bar</h2>
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
                        <li>Web Camera</li>
                        <li>Wide Angle Lens</li>
                        <li>Built-in Microphone Array</li>
                        <li>Built-in 2x Speakers</li>
                        <li>USB Connectivity</li>
                        <li>Height Adjustable Stand</li>
                    </ul>
                </div>
                <iframe className="tech-vid-sp" width="489" height="350" src="https://www.youtube.com/embed/Ni2t6Q__Yv4" title="Tech2U Feature Video: Video Conferencing Soundbar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
    </section>
}
