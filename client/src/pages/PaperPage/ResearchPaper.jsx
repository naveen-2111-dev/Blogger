import React from "react";
import paper from "../../public/paper.jpg";

const ResearchPaper = () => {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      <div className="flex justify-center">
        <div className="p-5 border border-grey-300 rounded-md bg-white shadow-lg mt-5">
          <img src={paper} alt="paper" className="h-30 w-full rounded-md" />
          <div className="">
            <p className="capitalize text-lg font-bold">Title</p>
          </div>
          <div className="">
            <p className="capitalize text-xs">decription</p>
          </div>
          <div className="">
            <button className="bg-blue-500 p-2 rounded-md mt-5 text-white w-full">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
