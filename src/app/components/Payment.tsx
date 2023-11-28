import React from "react";
import Image from "next/image";
import shoe from "../../../public/nike-show.jpeg";
function Payment() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex bg-zinc-100 rounded-md ">
        <div>
          <Image src={shoe} alt="shoe" />
        </div>
        <div className="flex flex-col px-24 py-10 border-l-2 border-zinc-500">
          <h1 className="text-black font-bold text-3xl tracking-wide">
            CHECKOUT
          </h1>
          <div className="flex flex-col space-y-10 mt-16">
            <div className="flex flex-col space-y-3">
              <label className="text-zinc-600">Name on Card</label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg border-2 border-zinc-300 "
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-zinc-600">Credit Card Number</label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg border-2 border-zinc-300 "
              />
            </div>
          </div>

          <div className="flex space-x-8 mt-10">
            <div className="flex flex-col space-y-3">
              <label className="text-zinc-600">Expiry Date</label>
              <input
                type="text"
                className="outline-none w-[100px] h-[40px] rounded-lg border-2 border-zinc-300 px-2"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-zinc-600">CVC</label>
              <input
                type="text"
                className="outline-none w-[100px] h-[40px] rounded-lg border-2 border-zinc-300 px-2"
              />
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] px-10 py-4 rounded-md text-white tracking-wide font-medium mt-10 hover:opacity-80 transition-colors duration-300">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
