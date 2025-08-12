import React from "react";
import ListSec from "./ListSec";
import FormSec from "./FormSec"; // assuming you have this
import { Calendar } from "lucide-react";

function Home({ visible }) {
  const handlePlanClick = () => {
    console.log("Plan button clicked!");
  };

  return (
    <div
      className={`flex justify-center items-center h-screen gap-6 relative transition-all duration-700 ease-out transform
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }
      `}
    >
      <div className="botton-Section">
        <button
          onClick={handlePlanClick}
          className="bg-white text-black font-semibold px-6 py-3 mt-5 w-50 rounded-2xl border border-gray-200 absolute top-20 left-40 -translate-x-3/5
             shadow-[4px_6px_15px_rgba(0,0,0,0.15)] rotate-[-1deg] skew-x-[-10deg]
             transition-all duration-300 ease-in-out transform
             hover:translate-x-1 hover:shadow-[6px_8px_20px_rgba(0,0,0,0.18)] hover:bg-gray-50
             active:scale-95 cursor-pointer flex items-center justify-center gap-2"
        >
          <Calendar size={18} />
          Plan
        </button>
      </div>
      <ListSec visible={visible} />
      <FormSec />
    </div>
  );
}

export default Home;
