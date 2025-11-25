import Carousel from "./Carousel";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TeamSection from "./TeamSection";
import QuestionSection from "./QuestionSection";
import SuccessSection from "./SuccessRate";

const Main = () => {
     return (
          <div>
               <Carousel />
               <SuccessSection />
               <AboutSection />
               <ServicesSection />
               <TeamSection />
               <QuestionSection />
          </div>
     );
};

export default Main;
