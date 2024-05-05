import React from "react";
import {
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Social = () => {
  const openInNewTab = (url) => {
    try {
      const Opener = window.open(url, "_blank", "noopener,noreferrer");
      if (Opener) Opener.opener = null;
      else console.log("error");
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div className="flex gap-5">
      <FaTwitter
        onClick={() => openInNewTab("https://x.com/NaveenRaja58194")}
        className="text-3xl shadow-md p-2 rounded-md transform scale-100 hover:scale-110 hover:text-blue-500 cursor-pointer"
      />
      <FaWhatsapp
        onClick={() => openInNewTab("https://wa.me/6382817065")}
        className="text-3xl shadow-md p-2 rounded-md transform scale-100 hover:scale-110 hover:text-green-500 cursor-pointer"
      />
      <FaLinkedin
        onClick={() =>
          openInNewTab("https://www.linkedin.com/in/naveen-rajan-m-60361a259")
        }
        className="text-3xl shadow-md p-2 rounded-md transform scale-100 hover:scale-110 hover:text-blue-900 cursor-pointer"
      />
      <FaInstagram
        onClick={() => openInNewTab("https://www.instagram.com/naveen_rajan_m")}
        className="text-3xl shadow-md p-2 rounded-md transform scale-100 hover:scale-110 hover:text-pink-700 cursor-pointer"
      />
    </div>
  );
};

export default Social;
