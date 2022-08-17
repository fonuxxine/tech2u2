import StoryBox from "./components/StoryBox";
import img1 from "../assets/tech/Group385.svg";
import im1 from "../assets/stories/a1.svg";
import im2 from "../assets/stories/a2.svg";
import im3 from "../assets/stories/a3.svg";
import im4 from "../assets/stories/a4.svg";
import im5 from "../assets/stories/a5.svg";

export default function Stories() {
    const techSupport1 = [
        {
        title: "Connecting Students on a Global Scale",
        image: im5,
        description: "Steven Treiber wanted to diversify lecture content by allowing guest lecturers and students to join from anywhere in the world. Tech2U enabled panoramic views to capture the full classroom experience.",
        link: "/steve",
        name: "Steven"},
        {
        title: "Empowering a First Time Instructor",
        image: im4,
        description: "Shirley Yeung needed help setting up classroom technology to support her goal of teaching dual delivery classes. Tech2U provided Shirley with a video conferencing soundbar, allowing for more animated presentations.",
        link: "/shirley",
        name: "Shirley"},
        {
        title: "Innovation in the Classroom",
        image: im2,
        description: "Bill Ju needed help finding technical solutions to allow him to provide online and dual delivery teaching. Tech2U worked with Bill to design a custom setup that recorded high-definition lectures for his dual delivery teaching.",
        link: "/bill",
        name: "Bill"},
        {
        title: "Technology as a Pathway to Engagement",
        image: im1,
        description: "Doug Richards wanted to create an inclusive environment by being able to record his lectures along with his demonstrations of anatomical models. Tech2U set him up with a camera that suited his creative lecture style to show physical demonstrations.",
        link: "/doug",
        name: "Doug"},
        {
        title: "Adapting to Unique Situations",
        image: im3,
        description: "Barbara Ballyk needed help switching to a hybrid teaching model and maintaining high engagement in both environments. Tech2U provide an HDMI splitter, allowing her to use several devices simultaneously to maximized student engagement.",
        link: "/barbara",
        name: "Barbara"}
    ]
    return <section>
        <div class="nav-info">
            <div class="nav-text box-about3">
                <h2>Tech2U Instructor Stories</h2>
                <p>Tech2U is already supporting many instructors to reach their goals and maximize technology in their classroom. Read some of the stories of Instructors who have received technical support through Tech2U. </p>
            </div>
            <img class="nav-p-abt" src={img1} alt=""/>
        </div>
        <div class="stories-body">
            {
                techSupport1.map(card => {
                    return (
                        <StoryBox title={card.title} image={card.image} description={card.description} link={card.link} name={card.name}/>
                    )
                })
            }
        </div>
    </section>
}
