import Carousel from "./Carousel";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TeamMembersSection from "./TeamSection";
import SuccessSection from "./SuccessRate";
import ContactSection from "../GetInTouch";

const Main = () => {
     return (
          <div>
               <Carousel />
               <ServicesSection />
               <TeamMembersSection />
               <AboutSection />
               <SuccessSection />
               <ContactSection />
          </div>
     );
};

export default Main;
