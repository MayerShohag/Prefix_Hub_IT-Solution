
import HeroCarousel from "./carousel/Carousel";
import Header from "./header/Header";
import AboutUs from "./main/AboutSection";
import FooterSection from "./main/Footer";
import ContactSection from "./main/GetInTouch";
import QuestionCollapse from "./main/QuestionCollapse";
import ServicesSection from "./main/ServicesSection";
import SuccessRate from "./main/SuccessRate";
import TeamMembersSection from "./main/TeamMembers";

const Root = () => {
      return (
            <div className="font-sans">
                  <Header>
                        <Header/>
                  </Header>
                  <main className="">
                        <HeroCarousel/>
                        <SuccessRate/>
                        <AboutUs/>
                        <ServicesSection/>
                        <TeamMembersSection/>
                        <QuestionCollapse/>
                        <FooterSection/>
                  </main>
            </div>
      );
};

export default Root;