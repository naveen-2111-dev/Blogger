import React from "react";
import { useNavigate } from "react-router-dom";

const AdminCheck = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mt-20 justify-center item-center">
      <div className="bg-white p-8 rounded-xl shadow-lg border flex-row w-250">
        <input
          type="text"
          placeholder="userName..."
          required
          className="w-full border border-grey-300 outline-none rounded-md p-2 mb-2"
        />
        <input
          type="password"
          placeholder="Password..."
          required
          className="w-full border border-grey-300 outline-none rounded-md p-2 mb-2"
        />
        <div className="buttonclass">
          <button
            onClick={() => {
              navigate("/addblog");
            }}
            className="w-full bg-blue-500 p-2 rounded-md tracking-wider text-white py-2 mt-5 hover:tracking-tight hover:bg-blue-600"
          >
            Autn
          </button>
        </div>
        <p className="flex justify-center item-center border-t-2 mt-10 pt-5 capitalize">
          "only admin can continue further"
        </p>
      </div>
    </div>
  );
};

export default AdminCheck;
