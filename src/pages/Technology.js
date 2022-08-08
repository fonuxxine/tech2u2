import TechBox from "./components/TechBox";
import img1 from "../assets/about/Group379-2.svg";
import im1 from "../assets/tech/Rectangle39.svg";
import im2 from "../assets/tech/Rectangle39-2.svg";
import im3 from "../assets/tech/Rectangle39-3.svg";
import im4 from "../assets/tech/Rectangle39-4.svg";
import im5 from "../assets/tech/Rectangle39-5.svg";
import im6 from "../assets/tech/Rectangle39-6.svg";
import im7 from "../assets/tech/Rectangle39-7.svg";

export default function Technology() {
    const techSupport1 = [
        {
        title: "Technology Delivered",
        image: im1,
        link: "/techdelivered"},
        {
        title: "Dual Delivery Support",
        image: im2,
        link: "/dualdelivery"},
        {
        title: "Content Capture",
        image: im3,
        link: "/content"},
        {
        title: "Audio & Visual Enhancement",
        image: im4,
        link: "/audio"}
    ]
    const techSupport2 = [
        {
        title: "Technology Stations",
        image: im5,
        link: "/stations"},
        {
        title: "Live Stream Events",
        image: im6,
        link: "/livestream"},
        {
        title: "Tech2U Studio",
        image: im7,
        link: "/studio"}
    ]
    return <section>
        <div class="nav-info-about">
            <div class="nav-text box-about3">
                <h2>Technology</h2>
                <p>Tech2U offers real-time, personalized tech support in the classroom from a technical support team. Contact us to
                schedule tech support for your class. We offer:</p>
            </div>
            <img class="nav-p-tech" src={img1} alt=""/>
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
