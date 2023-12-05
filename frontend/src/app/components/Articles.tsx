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
    <div className="flex items-center justify-center">
      <div className="bg-pink-400 bg-opacity-20 rounded-md shadow-lg shadow-slate-400">
        <div>
          <Image width={300} height={300} src={props.image} alt="shoe" />
        </div>
        <div className="px-5 py-5 pb-7">
          <div className="flex flex-col space-y-2 text-white mt-5">
            <h1 className="font-bold">{props.name}</h1>
            <h1>${props.price}</h1>
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
