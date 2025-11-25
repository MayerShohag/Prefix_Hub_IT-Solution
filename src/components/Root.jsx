import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Root = () => {
     return (
          <div className="font-sans">
               <Header>
                    <Header />
               </Header>
               <main>
                    <Outlet />
               </main>
               <Footer />
          </div>
     );
};

export default Root;
