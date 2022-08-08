import SubTechBox from "./components/SubTechBox";
import im0 from "../assets/tech/Group20.svg";
import im1 from "../assets/tech/image20.svg";
import im2 from "../assets/tech/image21.svg";
import im4 from "../assets/tech/image22.svg";
import im5 from "../assets/tech/image23.svg";
import im6 from "../assets/tech/image24.svg";
import vid1 from "../assets/video/audio.mp4";
import vid2 from "../assets/video/connecting-devices.mp4";
import vid3 from "../assets/video/features.mp4";
import vid4 from "../assets/video/help.mp4";
import vid5 from "../assets/video/login.mp4";
import vid6 from "../assets/video/teachingDock.mp4";

export default function Stations() {
    return <section>
            <div class="nav-info-cont-cap">
                <div class="nav-cont-cap">
                    <div class="nav-cont-text">
                        <h2>Teaching Stations</h2>
                        <p>Tech2U supports instructors in capturing content to share with students after class.</p>
                    </div>
                    <img src={im0} alt=""/>
                </div>
            </div>
            <div class="teach-sta-body">
            <h2>Teaching Station Classic</h2>
            <div class="sta-set">
                <img src={im1} alt=""/>
                <ul>
                    <li>Positioned 5' from the wall</li>
                    <li>Fixed</li>
                    <li>Slide-out shelf Barrier-free height</li>
                    <li>Ceiling Projector</li>
                    <li>Live Intercom AV Support</li>
                    <li>VGA and/or HDMI connection</li>
                    <li>Power Outlets</li>
                    <li>Audio/Video input jacks (RCA)</li>
                    <li>Audio Output - 3.5mm headphone jack</li>
                    <li>Touchscreen</li>
                    <li>Room PC with DVD access</li>
                    <li>USB inputs</li>
                    <li>Fixed Podium Microphone and Wireless Lav Mic</li>
                    <li>Hard-wired Internet Connection*</li>
                </ul>
            </div>
            <h2>Teaching Station</h2>
            <div class="sta-set">
                <img src={im2} alt=""/>
                <ul>
                    <li>Positioned 5' from the wall</li>
                    <li>Fixed</li>
                    <li>Slide-out shelf Barrier-free height</li>
                    <li>Ceiling Projector</li>
                    <li>Live Intercom AV Support</li>
                    <li>VGA and/or HDMI connection</li>
                    <li>Power Outlets</li>
                    <li>Audio Output - 3.5mm headphone jack</li>
                    <li>Touchscreen</li>
                    <li>Room PC with DVD access</li>
                    <li>USB inputs</li>
                    <li>Fixed Podium Microphone and Wireless Lav Mic</li>
                    <li>Hard-wired Internet Connection*</li>
                </ul>
            </div>
                <h2>Teaching Station Jr.</h2>
                <div class="sta-set">
                    <img src={im4} alt=""/>
                    <ul>
                        <li>Against Wall</li>
                        <li>Fixed</li>
                        <li>Slide-out shelf Barrier-free height</li>
                        <li>Ceiling Projector</li>
                        <li>Live Intercom AV Support</li>
                        <li>VGA and/or HDMI connection</li>
                        <li>Power Outlets</li>
                        <li>Hard-wired Internet Connection*</li>
                        <li>Configuration app for laptop required</li>
                    </ul>
                </div>
                <h2>Teaching Dock Monitor</h2>
                <div class="sta-set">
                    <img src={im5} alt=""/>
                    <ul>
                        <li>On the Wall</li>
                        <li>Fixed</li>
                        <li>Slide-out shelf Barrier-free height</li>
                        <li>Ceiling Projector</li>
                        <li>Live Intercom AV Support</li>
                        <li>VGA and/or HDMI connection</li>
                        <li>Power Outlets</li>
                        <li>Hard-wired Internet Connection*</li>
                        <li>Configuration app for laptop required</li>
                    </ul>
                </div>
                <h2>Teaching Dock Monitor</h2>
                <div class="sta-set">
                    <img src={im6} alt=""/>
                    <ul>
                        <li>On the Wall</li>
                        <li>Fixed</li>
                        <li>Slide-out shelf Barrier-free height</li>
                        <li>Ceiling Projector</li>
                        <li>Live Intercom AV Support</li>
                        <li>VGA and/or HDMI connection</li>
                        <li>Power Outlets</li>
                        <li>Hard-wired Internet Connection*</li>
                        <li>Configuration app for laptop required</li>
                    </ul>
                </div>
                <h2>Instructional Videos</h2>
                <div class="vid-row">
                    <video src={vid1} controls></video>
                    <video src={vid2} controls></video>
                </div>
                <div class="vid-row">
                    <video src={vid3} controls></video>
                    <video src={vid4} controls></video>
                </div>
                <div class="vid-row">
                    <video src={vid5} controls></video>
                    <video src={vid6} controls></video>
                </div>
            </div>
    </section>
}
