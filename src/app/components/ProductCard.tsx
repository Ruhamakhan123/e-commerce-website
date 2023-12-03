import React from "react";
import Image from "next/image";
import shoe from "../../../public/single.webp";
function ProductCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-pink-400 bg-opacity-20 rounded-md shadow-2xl">
        <div>
          <Image width={300} height={300} src={shoe} alt="shoe" />
        </div>
        <div className="px-2 py-5">
          <div className="flex flex-col space-y-2 text-white mt-5">
            <h1 className="font-bold">Nike Dunks Low</h1>
            <h1>Men's Shoe</h1>
            <h1>$180</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
