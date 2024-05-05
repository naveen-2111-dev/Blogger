import React from "react";
import Time from "../../utils/Date & Time/Time";
import Dates from "../../utils/Date & Time/Date";
import Social from "../../components/Social";
import { FaVolumeUp } from "react-icons/fa";

const Blog = () => {
  const HandleRead = () => {
    console.log("ok");
  };
  return (
    <div className="flex justify-center flex-col items-center bg-white">
      <div className="p-8">
        <div className="title">
          <h2 className="font-bold text-2xl mb-5 capitalize">BlogTitle</h2>
        </div>
        <div className="content border p-5 rounded-lg border-blue-400 shadow-inner">
          <p className="capitalize text-xs">
            User ipsum lorem 200 words ChatGPT Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed fermentum aliquet ex, vel rhoncus
            tellus convallis non. Donec et mauris nec eros pulvinar facilisis.
            Fusce suscipit nunc sit amet elit commodo, a efficitur lectus
            tristique. Nullam hendrerit odio ut nulla fringilla, sit amet
            Maecenas ac tincidunt enim. Sed condimentum, ipsum sed facilisis
            varius, ex nisi suscipit nisi, a lacinia nunc nulla eu lectus. Sed
            eget nisi volutpat, ultrices eros non, efficitur eros. Vestibulum
            eget consequat odio. Pellentesque habitant morbi tristique senectus
            libero nec urna gravida sollicitudin. Fusce gravida lacinia elit.
            Integer ut felis id urna eleifend pharetra. Nullam faucibus justo ac
            enim posuere, id lacinia odio fringilla. Cras a ullamcorper ex.
            Suspendisse ac felis sed nisi efficitur fermentum. Fusce malesuada
            tellus eget sem dignissim, et iaculis urna pellentesque. Maecenas
            bibendum lacus id erat vehicula, quis feugiat arcu aliquet. Integer
            nec semper nunc, non dictum massa. Phasellus vel sollicitudin odio.
            Aliquam erat volutpat. Curabitur eget velit id nunc interdum
            feugiat. Sed at elit sit amet odio aliquam aliquam nec eu odio. Sed
            at ultricies dui. Suspendisse potenti. Cras vestibulum libero sed ex
            vestibulum, ut placerat libero accumsan. Aenean efficitur orci id
            lacus pulvinar, in lacinia enim sodales. Mauris id risus in risus
            hendrerit convallis vel at leo. Donec ultricies odio vitae nisi
            aliquam dictum. Nulla facilisi. Morbi venenatis augue vel nisi
            tincidunt, vel pellentesque elit lacinia. Fusce consequat arcu nec
            lectus vulputate, et malesuada odio suscipit. Maecenas vitae nisi
            eget mauris auctor venenatis id nec felis. Integer congue metus non
            lorem hendrerit pharetra. Aliquam at velit non ipsum vehicula
            iaculis. Integer fringilla neque in leo pharetra, ac varius justo
            accumsan. Sed ac neque at leo cursus cursus. In tincidunt velit eget
            condimentum pharetra. Suspendisse potenti. Ut dapibus odio ligula,
            non finibus justo viverra sed. Sed vel massa eu nibh volutpat
            vehicula. Sed et luctus quam. Donec eget lorem at libero gravida
            pretium.
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
                onClick={HandleRead}
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
