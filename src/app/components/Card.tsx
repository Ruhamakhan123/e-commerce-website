import React from "react";
import Image, { StaticImageData } from "next/image";
import shoe1 from "../../../public/shoe1.png";
import shoe2 from "../../../public/shoe2.png";
import shoe3 from "../../../public/shoe3.png";
import Articles from "./Articles";

function Card() {
  return (
    <div className="flex flex-col items-center justify-center ml-28 space-y-8">
      <div className="flex w-[1302px] h-[400px] justify-between items-center mr-24  ">
        {/* <Articles />
        <Articles />
        <Articles /> */}
      </div>

      {/* <div className="flex w-[1302px] h-[400px] justify-between items-center mr-24  ">
        <Articles img={shoe1} name="Nike Air Zoom Pegasus 38" price="$120" />
        <Articles
          img={shoe1}
          name="Nike ZoomX Invincible Run Flyknit"
          price="$180"
        />
        <Articles img={shoe2} name="Nike Revolution 6" price="$60" />
      </div> */}
    </div>
  );
}

export default Card;
