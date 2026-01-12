import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

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
