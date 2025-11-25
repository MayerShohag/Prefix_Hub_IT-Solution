import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Services from "../components/header/services/Services";
import Main from "../components/main/Main";

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
          ],
     },
]);
