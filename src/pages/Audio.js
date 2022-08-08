import TechBox from "./components/TechBox";
import im2 from "../assets/tech/Rectangle25.svg";
import im4 from "../assets/tech/Rectangle28.svg";
import im5 from "../assets/tech/Rectangle5.svg";
import im6 from "../assets/tech/Rectangle8.svg";
import im3 from "../assets/tech/Rectangle27.svg";

export default function Audio() {
    const techSupport1 = [
        {
        title: "Document Camera",
        image: im5,
        link: "/camera"},
        {
        title: "Touch Screen Annotation Display",
        image: im2,
        link: "/touchscreen"},
        {
        title: "Video Conferencing Sound Bar",
        image: im4,
        link: "/videoconference"},
    ]
    const techSupport2 = [
        {
        title: "Wireless Microphones & Speakers",
        image: im6,
        link: "/wireless"},
        {
        title: "Web Camera",
        image: im3,
        link: "/webcamera"}
    ]
    return <section>
        <div class="nav-info-about">
            <div class="box-tech2">
                <h2>Audio &amp; Visual Enhancements</h2>
                <p>Tech2U offers a wide range of technology designed to enhance the audio and visual experience in the classroom. Contact us to schedule tech support for your class. There are several technology options that will enhance the audio/visual experience:</p>
            </div>
        </div>
        <div class="tech-body">
            <div class="tech-row">
                {
                    techSupport1.map(card => {
                        return (
                            <TechBox title={card.title} image={card.image} link={card.link}/>
                        )
                    })
                }
            </div>
            <div class="tech-row">
                {
                    techSupport2.map(card => {
                        return (
                            <TechBox title={card.title} image={card.image} link={card.link}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
}
