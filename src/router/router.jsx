import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Services from "../pages/Services";
import Main from "../components/main/Main";
import Industries from "../pages/Industries";
import TeamMembers from "../pages/TeamMembers";
import About from "../pages/About";
import ContactSection from "../components/GetInTouch";
import Error from "../pages/Error";
import ServicesDetails from "../components/ServicesDetails";

export const router = createBrowserRouter([
     {
          path: "/",
          errorElement: Error,
          Component: Root,
          children: [
               {
                    index: true,
                    Component: Main,
               },
               {
                    path: "/services",
                    Component: Services,
               },
               {
                    path: "/services/:id",
                    Component: ServicesDetails,
               },
               {
                    path: "/industries",
                    Component: Industries,
               },
               {
                    path: `/team`,
                    Component: TeamMembers,
               },
               {
                    path: `/about`,
                    Component: About,
               },
               {
                    path: `/contact`,
                    Component: ContactSection,
               },
               {
                    path: `/*`,
                    Component: Error,
               },
          ],
     },
]);
