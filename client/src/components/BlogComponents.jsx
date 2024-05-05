import React from "react";
import Options from "./options";

const BlogComponents = () => {
  return (
    <div className="sidebarcont">
      <div className="mainsideBar">
        <h1 className="text-2xl font-bold flex justify-center mt-5 ">
          <span className="text-blue-500">C</span>ategory
        </h1>
      </div>
      <Options/>
    </div>
  );
};

export default BlogComponents;
