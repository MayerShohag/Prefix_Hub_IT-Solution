import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Services from "../pages/Services";
import Main from "../components/main/Main";
import Industries from "../pages/Industries";

export const router = createBrowserRouter([
     {
          path: "/",
          Component: Root,
          children: [
               {
                    path: "/",
                    index: true,
                    Component: Main,
               },
               {
                    path: "/services",
                    Component: Services,
               },
               {
                    path: "/industries",
                    Component: Industries,
               },
          ],
     },
]);
