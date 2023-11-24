import React from "react";
import Image, { StaticImageData } from "next/image";
interface ArticleProps {
  img: StaticImageData;
  name: string;
  price: string;
}

const Articles: React.FC<ArticleProps> = ({ img, name, price }) => {
  return (
    <div>
      <div className=" flex w-[380px] h-[380px] relative rounded-[50px] flex-col justify-center items-center  bg-gradient-to-tr from-[#6c72cb] to-[#cb69c1] space-y-4 py-5">
        <div className="w-[300px] h-[300px] relative"></div>
        <Image className="w-[420px] h-[263px]" src={img} alt={""} />
        <div className="w-[355px] text-center text-white text-xl font-bold font-Montserrat tracking-wide px-5">
          {name}
        </div>
        <div className="text-center text-white text-2xl font-semibold font-Open Sans tracking-wide">
          {price}
        </div>
      </div>
    </div>
  );
};

export default Articles;
