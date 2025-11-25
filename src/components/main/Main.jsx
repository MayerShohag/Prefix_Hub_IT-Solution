import Carousel from "./Carousel";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TeamSection from "./TeamSection";
import SuccessSection from "./SuccessRate";
import ContactSection from "../header/contact/GetInTouch";

const Main = () => {
     return (
          <div>
               <Carousel />
               <ServicesSection />
               <TeamSection />
               <AboutSection />
               <SuccessSection />
               <ContactSection />
          </div>
     );
};

export default Main;
