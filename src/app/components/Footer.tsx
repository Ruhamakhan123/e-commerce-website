import React from "react";
import Image from "next/image";
import Foot from "../../../public/Frame 4.png";
function Footer() {
  return (
    <div className="flex items-start justify-between p-10">
      <div className="flex-col space-y-3 items-start ">
        <div className="text-start text-zinc-100 text-lg font-extrabold font-Open Sans tracking-wide">
          GIFT CARDS
        </div>
        <div className="text-start text-zinc-100 text-lg font-extrabold font-Open Sans tracking-wide">
          PROMOTIONS
        </div>
        <div className="text-start text-zinc-100 text-lg font-extrabold font-Open Sans tracking-wide">
          FIND A STORE
        </div>
        <div className="text-start text-zinc-100 text-lg font-extrabold font-Open Sans tracking-wide">
          SIGN UP FOR A EMAIL
        </div>
        <div className="text-start text-zinc-100 text-lg font-extrabold font-Open Sans tracking-wide">
          BECOME A MEMBER
        </div>
        <div className="text-start text-zinc-100 text-lg font-extrabold font-Open Sans tracking-wide">
          NIKE JOURNAL
        </div>
        <div className="text-start text-zinc-100 text-lg font-extrabold font-Open Sans tracking-wide">
          SEND US FEEDBACK
        </div>
      </div>

      <div className="w-[193px] h-[195px] pr-[18px] pb-2.5 flex-col justify-start items-start gap-[13px] inline-flex">
        <div className="text-start text-zinc-100 text-lg font-extrabold font-Open Sans tracking-wide">
          GET HELP
        </div>
        <div className="text-start text-pink-400 text-base font-semibold font-Lato tracking-wide">
          Order Status
        </div>
        <div className="text-start text-pink-400 text-base font-semibold font-Lato tracking-wide">
          Shipping and Delivery
        </div>
        <div className="text-start text-pink-400 text-base font-semibold font-Lato tracking-wide">
          Returns
        </div>
        <div className="text-start text-pink-400 text-base font-semibold font-Lato tracking-wide">
          Payment Options
        </div>
        <div className="text-start text-pink-400 text-base font-semibold font-Lato tracking-wide">
          Contact Us
        </div>
      </div>
      <div className="flex-col space-y-3 items-start">
        <div className="w-[122px] h-[185px] relative">
          <div className="left-0 top-[35px] absolute text-center text-pink-400 text-base font-semibold font-Lato tracking-wide">
            News
          </div>
          <div className="left-0 top-[67px] absolute text-center text-pink-400 text-base font-semibold font-Lato tracking-wide">
            Careers
          </div>
          <div className="left-0 top-[99px] absolute text-center text-pink-400 text-base font-semibold font-Lato tracking-wide">
            Investors
          </div>
          <div className="left-0 top-[131px] absolute text-center text-pink-400 text-base font-semibold font-Lato tracking-wide">
            Purpose
          </div>
          <div className="left-0 top-[163px] absolute text-center text-pink-400 text-base font-semibold font-Lato tracking-wide">
            Sustainability
          </div>
          <div className="left-0 top-0 absolute text-center text-zinc-100 text-lg font-extrabold font-Open Sans tracking-wide">
            ABOUT NIKE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
