import React from "react";

const Footer = ({ info }) => {
  console.log(info);
  return (
    <div className="maincont">
      <div className="flex flex-col mt-10 gap-5 sm:text-sm md:text-md lg:text-lg justify-center items-center">
        {info ? (
          <p>
            Total papers: <span>30</span>
          </p>
        ) : (
          <p>
            Total blogs: <span>30</span>
          </p>
        )}
        <p>
          downloads: <span>30</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
