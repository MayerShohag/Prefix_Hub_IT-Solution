import { Link } from "react-router";

const Error = () => {
     return (
          <div className="h-[90vh] flex flex-col justify-center gap-5 items-center">
               <h1 className="font-semibold text-3xl md:text-5xl">
                    This page is under development!
               </h1>
               <Link
                    to={"/"}
                    className="border px-4 py-2 text-lg md:text-xl border-black/20 rounded-3xl font-normal active:scale-98 bg-black/15"
               >
                    Return Home
               </Link>
          </div>
     );
};

export default Error;
