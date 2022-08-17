import Navbar from "./Navbar";
import Technology from "./pages/Technology";
import Home from "./pages/Home";
import About from "./pages/About";
import Accessibility from "./pages/Accessibility";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import TechDelivered from "./pages/TechDelivered";
import DualDelivery from "./pages/DualDelivery";
import Audio from "./pages/Audio";
import Content from "./pages/Content";
import LiveStream from "./pages/LiveStream";
import Studio from "./pages/Studio";
import Stations from "./pages/Stations";
import Mobile from "./pages/Mobile";
import Camera from "./pages/Camera";
import TouchScreen from "./pages/TouchScreen";
import VideoConference from "./pages/VideoConference";
import Wireless from "./pages/Wireless";
import WebCamera from "./pages/WebCamera";
import Shirley from "./pages/Shirley";
import Steve from "./pages/Steve";
import Bill from "./pages/Bill";
import Doug from "./pages/Doug";
import Barbara from "./pages/Barbara";
import Footer from "./pages/components/Footer";
import GoToTop from "./pages/components/GoToTop";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact/>} />
          <Route exact path="/techdelivered" element= {<TechDelivered />} />
          <Route exact path="/dualdelivery" element= {<DualDelivery />} />
          <Route exact path="/audio" element= {<Audio />} />
          <Route exact path="/livestream" element= {<LiveStream />} />
          <Route exact path="/content" element= {<Content />} />
          <Route exact path="/studio" element= {<Studio />} />
          <Route exact path="/stations" element= {<Stations />} />
          <Route exact path="/mobile" element= {<Mobile />} />
          <Route exact path="/camera" element= {<Camera />} />
          <Route exact path="/touchscreen" element= {<TouchScreen />} />
          <Route exact path="/videoconference" element= {<VideoConference />} />
          <Route exact path="/wireless" element= {<Wireless />} />
          <Route exact path="/shirley" element= {<Shirley />} />
          <Route exact path="/bill" element= {<Bill />} />
          <Route exact path="/doug" element= {<Doug />} />
          <Route exact path="/steve" element= {<Steve />} />
          <Route exact path="/barbara" element= {<Barbara />} />
          <Route exact path="/webcamera" element= {<WebCamera />} />
        </Routes>
      </div>
      <Footer />
      <GoToTop />
    </>
  )
}

export default App
