"use client";

import React, { use, useRef } from "react";
import Image from "next/image";
import nike from "../../../public/nike-show.jpeg";
function PreviewPage() {
  const radioRef1 = useRef<HTMLInputElement>(null);
  const radioRef2 = useRef<HTMLInputElement>(null);
  const radioRef3 = useRef<HTMLInputElement>(null);
  const radioRef4 = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-10">
        <Image width={500} height={500} src={nike} alt="nike" />

        <div className="flex flex-col space-y-3">
          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-light tracking-[0.2em] ">
              Air Jordan 1 Mid SE Craft
            </h1>
            <h6 className="text-white bg-cyan-800 rounded-full w-fit px-3 mt-2">
              Men's Shoes
            </h6>
          </div>
          <h6 className="text-white text-lg px-2">$185</h6>

          <div className="flex justify-between">
            <h6 className="text-white mt-20">Select Size</h6>
            <h6 className="text-white mt-20">Size Guide</h6>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => radioRef1.current?.click()}
              className="border-white border-2 text-white px-2 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300 "
            >
              M 7 / W 8.5
            </button>
            <button
              onClick={() => radioRef2.current?.click()}
              className="border-white border-2 text-white px-2 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
            >
              M 7 / W 8.5
            </button>
            <button
              onClick={() => radioRef3.current?.click()}
              className="border-white border-2 text-white px-2 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
            >
              M 7 / W 8.5
            </button>
            <button
              onClick={() => radioRef4.current?.click()}
              className="border-white border-2 text-white px-2 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
            >
              M 7 / W 8.5
            </button>
          </div>

          <input
            className="opacity-0"
            ref={radioRef1}
            type="radio"
            name="size"
            value={1}
          />
          <input
            className="opacity-0"
            ref={radioRef2}
            type="radio"
            name="size"
            value={2}
          />
          <input
            className="opacity-0"
            ref={radioRef3}
            type="radio"
            name="size"
            value={3}
          />
          <input
            className="opacity-0"
            ref={radioRef4}
            type="radio"
            name="size"
            value={4}
          />
        </div>
      </div>
    </div>
  );
}

export default PreviewPage;
