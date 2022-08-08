import TechBox from "./components/TechBox";
import im1 from "../assets/tech/Rectangle24.svg";
import im2 from "../assets/tech/Rectangle25.svg";
import im3 from "../assets/tech/Rectangle27.svg";
import im4 from "../assets/tech/Rectangle28.svg";
import im5 from "../assets/tech/Rectangle5.svg";
import im6 from "../assets/tech/Rectangle8.svg";

export default function DualDelivery() {
    const techSupport1 = [
        {
        title: "Tech2U Mobile PC Station",
        image: im1,
        link: "/mobile",
        },
        {
        title: "Document Camera",
        image: im5,
        link: "/camera"},
        {
        title: "Touch Screen Annotation Display",
        image: im2,
        link: "/touchscreen"},
    ]
    const techSupport2 = [
        {
        title: "Video Conferencing Sound Bar",
        image: im4,
        link: "/videoconference"},
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
                <h2>Dual Delivery Support</h2>
                <p>Tech2U supports instructors in dual-delivery to both remote and in-person students. Contact us to schedule tech support for your class. There are several technology options to support dual-delivery available that can be set up by a Tech2U team member:</p>
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
