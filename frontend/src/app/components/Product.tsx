import { StaticImageData } from "next/image";
import React, { useRef } from "react";
import Image from "next/image";
function Product(props: {
  image: StaticImageData;
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
  category:
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
}) {
  //   const radioRefs = props.reviews.map(() => useRef(null));

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-10">
        <Image width={500} height={500} src={props.image} alt={""} />

        <div className="flex flex-col space-y-3">
          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-light tracking-[0.2em] ">
              {props.name}
            </h1>
            <h6 className="text-white bg-cyan-800 rounded-full w-fit px-3 mt-2">
              {props.category}
            </h6>
          </div>
          <h6 className="text-white text-lg px-2">${props.price}</h6>

          <div className="flex justify-between">
            <h6 className="text-white mt-20">Select Size</h6>
            <h6 className="text-white mt-20">Size Guide</h6>
          </div>

          {/* <div className="grid grid-cols-2 gap-4">
            {props.reviews.map((review, index) => (
              <button
                key={index}
                onClick={() => radioRefs[index].current?.click()}
                className="border-white border-2 text-white px-2 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300 "
              >
                {review.size}
              </button>
            ))}
          </div> */}
          {/* 
          {reviews.map((review, index) => (
            <input
              key={index}
              className="opacity-0"
              ref={radioRefs[index]}
              type="radio"
              name="size"
              value={review.size}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Product;
