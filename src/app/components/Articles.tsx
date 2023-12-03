import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import axios from "axios";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Articles = (props: {
  image: string | StaticImport;
  name:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  price:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  return (
    <div className="flex items-center justify-center space-x-20 ">
      <div className="flex flex-col items-center justify-center rounded-xl shadow-xl shadow-emerald-800">
        <div className="flex flex-col items-center justify-center w-[350px] h-[550px] rounded-xl bg-gray-800 ">
          <div className="mb-16">
            <div className="w-[350px] h-[400px] relative ">
              <Image
                className="w-[450px] h-[500px] rounded-xl object--down"
                src={props.image}
                alt="Rounded avatar"
                layout="fill"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mb-10 space-y-3">
            <div className="w-[355px] text-center text-white text-xl font-bold font-Montserrat tracking-wide px-5 ">
              <h2> {props.name}</h2>
            </div>
            <div className="text-center text-white text-2xl font-semibold font-Open Sans tracking-wide ">
              ${props.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;

{
  /* <div>
        <div className="flex rounded-[50px] flex-col justify-center items-center bg-gradient-to-tr from-[#6c72cb] to-[#cb69c1] space-y-4 px-5 py-5">
          <Image
            className="w-full h-full"
            style={{ objectFit: "cover" }}
            src={props.image}
            alt={""}
            layout="fill"
          />

         
         

          <div className="flex space-x-3">
            <button className="bg-black rounded-md text-white py-2 px-4">
              Add to Cart
            </button>
            <button className="bg-black rounded-md text-white py-2 px-4">
              Shop Now
            </button>
          </div>
        </div>
      </div> */
}
