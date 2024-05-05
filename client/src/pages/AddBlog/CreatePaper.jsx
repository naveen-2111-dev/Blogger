import React from "react";

const CreatePaper = () => {
  return (
    <div className="flex mt-20 justify-center items-center ">
      <div className="bg-white p-8 sm:4 md:6 lg:7 rounded-lg shadow-lg border w-200 sm:100 md:150 lg:170">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-blue-700">C</span>reate{" "}
          <span className="text-blue-700">P</span>aper
        </h2>
        <input
          type="text"
          placeholder="Title..."
          className="w-full border border-gray-300 outline-none rounded-md p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Description..."
          className="w-full border border-gray-300 outline-none rounded-md p-2 mb-2"
        />
        <input
          type="file"
          placeholder="Url..."
          className="w-full border border-gray-300 outline-none rounded-md p-2 mb-2"
        />
        <input
          type="file"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 outline-none"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 tracking-wide hover:tracking-tight mt-5">
          Add paper
        </button>
      </div>
    </div>
  );
};

export default CreatePaper;
