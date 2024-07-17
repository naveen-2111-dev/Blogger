import React, { useRef } from "react";
import Time from "../../utils/Date & Time/Time";
import Dates from "../../utils/Date & Time/Date";
import Social from "../../components/Social";
import { FaVolumeUp } from "react-icons/fa";

const Blog = () => {
  const pararef = useRef(null)

  const Paragraph = () => {
    const text = pararef.current.textContent;
    if (text !== null && text !== undefined) {
      TextToSpeech(text)
    }
  }

  const TextToSpeech = (params) => {
    const speech = new SpeechSynthesisUtterance(params);
    window.speechSynthesis.speak(speech);
  }

  return (
    <div className="flex justify-center flex-col items-center bg-white">
      <div className="p-8">
        <div className="title">
          <h2 className="font-bold text-2xl mb-5 capitalize">BlogTitle</h2>
        </div>
        <div className="content border p-5 rounded-lg border-blue-400 shadow-inner">
          <p className="capitalize text-xs" ref={pararef}>
            User ipsum lorem 200 words ChatGPT Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed fermentum aliquet ex, vel rhoncus
            tellus convallis non. Donec et mauris nec eros pulvinar facilisis.
          </p>
          <div className="flex justify-between">
            <div className="flex mt-10 gap-3 items-center clearfix">
              <button className="bg-blue-500 p-2 rounded-lg text-white capitalize text-xs transform scale-100 hover:scale-105">
                download
              </button>
              <Social />
            </div>
            <div className="mt-10 flex gap-4 items-center text-xs">
              <FaVolumeUp
                className="text-3xl shadow-md p-2 rounded-md transform scale-100 hover:scale-110 hover:text-green-500 cursor-pointer"
                onClick={Paragraph}
              />
              <p className="p-2 shadow-md rounded-lg cursor-pointer">
                <Dates />
              </p>
              <p className="p-2 shadow-md rounded-lg cursor-pointer">
                <Time />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
