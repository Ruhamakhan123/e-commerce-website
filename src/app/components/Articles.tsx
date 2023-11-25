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
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] rounded-xl">
          <div>
            <Image width={300} height={300} src={img} alt={""} />
          </div>
          <div className="px-2 py-5">
            <div className="flex flex-col space-y-2 text-white mt-2">
              <div className="text-center text-white text-lg font-bold font-Montserrat tracking-wide">
                {name}
              </div>
              <div className="text-center text-white text-xl font-semibold font-Open Sans tracking-wide">
                {price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
