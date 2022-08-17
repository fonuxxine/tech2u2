import img3 from '../assets/home/Lines.svg';
import img2 from '../assets/other/a1.svg';

export default function Accessibility() {
  return <section>
    <div class="nav-info">
        <div class="nav-text box-about3">
            <h2>Accessibility</h2>
            <p>In many ways, Tech2U supports classroom accessibility. A few examples of how Tech2U is making classrooms more accessible would include the following:</p>
        </div>
        <img class="nav-p-access" src={img3} alt=""/>
    </div>
    <div class="services">
        <div class="tech2u-impact2">
            <h2>Supporting Access in the Classroom</h2>
            <div class="access-row">
                <ul>
                    <li>Providing portable audio and video technology to spaces enabling participation for students who require remote accommodation</li>
                    <li>Video cameras with operators in the room increasing access to course materials for students online or at the back of the classroom</li>
                    <li>Instructors have flexibility of teaching from home or campus through the provision of a mobile Tech2U teaching station enabling access for both the instructors and students</li>
                </ul>
                <img src={img2} alt=""/>
            </div>
        </div>
    </div>
    </section>
}
