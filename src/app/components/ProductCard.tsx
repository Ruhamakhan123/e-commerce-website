import React from "react";
import Image from "next/image";
import shoe from "../../../public/shoe2.png";
function ProductCard() {
  return (
    <div>
      <div className=" flex rounded-[50px] flex-col justify-center items-center bg-gradient-to-tr from-[#6c72cb] to-[#cb69c1] space-y-4 px-5 py-5">
        <Image className="w-[420px] h-[263px]" src={shoe} alt={""} />
        <div className="w-[355px] text-center text-white text-xl font-bold font-Montserrat tracking-wide px-5">
          Nike Dunks Low
        </div>
        <div className="text-center text-white text-2xl font-semibold font-Open Sans tracking-wide">
          $180
        </div>

        <div className="flex space-x-3 ">
          <button className="bg-black rounded-md  text-white py-2 px-4">
            Add to Cart
          </button>
          <button className="bg-black rounded-md  text-white py-2 px-4">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
