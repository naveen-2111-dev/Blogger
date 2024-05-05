import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../public/blog1.jpg";
import paper from "../public/paper.jpg";
import Footer from "./footer";

const Options = () => {
  return (
    <div className="flex justify-center gap-3 mt-6">
      <div className="p-2 bg-white border-2 rounded-md shadow-lg">
        <img src={blog1} alt="blog" className="h-44 w-auto rounded-md" />
        <Link to="/createblog" className=" ">
          <span className="bg-blue-500 rounded-md p-2 flex justify-center mt-5 text-white capitalize">
            Create blog
          </span>
        </Link>
        <Footer />
      </div>
      <div className="p-2 bg-white border-2 rounded-md shadow-lg">
        <img src={paper} alt="blog" className="h-44 w-auto rounded-md" />
        <Link to="/createpaper" className="">
          <span className="bg-blue-500 rounded-md p-2 flex justify-center mt-5 text-white capitalize">
            Create paper
          </span>
        </Link>
        <Footer info={true} />
      </div>
    </div>
  );
};

export default Options;
