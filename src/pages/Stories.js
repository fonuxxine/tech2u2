import StoryBox from "./components/StoryBox";
import img1 from "../assets/tech/Group385.svg";
import im1 from "../assets/stories/a1.svg";
import im2 from "../assets/stories/a2.svg";
import im3 from "../assets/stories/a3.svg";
import im4 from "../assets/stories/a4.svg";

export default function Stories() {
    const techSupport1 = [
        {
        title: "Empowering a First Time Instructor",
        image: im4,
        description: "Shirley needed help setting up classroom technology to support her goal of teaching dual-delivery classes.",
        link: "/shirley"},
        {
        title: "Innovation in the Classroom",
        image: im2,
        description: "Bill needed help finding technical solutions to allow him to provide online and dual delivery teaching. ",
        link: "/bill"},
    ]
    const techSupport2 = [
        {
        title: "Technology as a Pathway to Engagement",
        image: im1,
        description: "Doug wanted to create an inclusive environment by being able to record his lectures along with his demonstrations of anatomical models.",
        link: "/doug"},
        {
        title: "Adapting to Unique Situations",
        image: im3,
        description: "Barbara needed help switching to a hybrid teaching model and maintaining high engagement in both environments.",
        link: "/barbara"}
    ]
    return <section>
        <div class="nav-info-about">
            <div class="nav-text box-about3">
                <h2>Tech2U Instructor Stories</h2>
                <p>Tech2U is already supporting many instructors to reach their goals and maximize technology in their classroom. Read some of the stories of Instructors who have received technical support through Tech2U. </p>
            </div>
            <img class="nav-p-tech" src={img1} alt=""/>
        </div>
        <div class="stories-body">
            <div class="stories-top">
                <img src={im1} alt=""/>
                <div class="story-content">
                    <div class="content-top">
                        <p>Insert Text about Steve: lorep ipsum fhsafhdoahsdofhodsa hfdshafiodsjaf daf dsajfdsjafo</p>
                        <a href="/stories-page/shirley-yeung.html" class="stories-link-read">Read more &gt;</a>
                    </div>
                    <div class="story-title">
                        Steve Story
                    </div>
                </div>
            </div>
            <div class="stories-row">
                {
                    techSupport1.map(card => {
                        return (
                            <StoryBox title={card.title} image={card.image} description={card.description} link={card.link}/>
                        )
                    })
                }
            </div>
            <div class="stories-row">
                {
                    techSupport2.map(card => {
                        return (
                            <StoryBox title={card.title} image={card.image} description={card.description} link={card.link}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
}
