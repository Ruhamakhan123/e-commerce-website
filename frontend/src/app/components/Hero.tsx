"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Shoe from "../../../public/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7 1.png";
import Arrow from "../../../public/arrow.png";
import Link from "next/link";
import Articles from "./Articles";
import axios from "axios";
interface Product {
  p_id: number;
  p_name: string;
  p_price: number;
  p_image: StaticImageData;
}

function Hero() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/products");
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="w-[1440px] h-[807px] relative bg-zinc-900 ml-28">
        <div className="left-[185px] top-[306px] absolute text-center text-zinc-100 text-opacity-10 text-[278px] font-bold font-Montserrat tracking-[120px]">
          NIKE
        </div>
        <div className="w-[667.03px] h-[452.64px] left-[387px] top-[251.65px] absolute"></div>
        <Image
          className="w-[695px] h-[433px] left-[244px] top-[399.82px] absolute origin-top-left rotate-[-29.75deg]"
          src={Shoe}
          alt={""}
        />
        <div className="w-[892px] left-[274px] top-[213px] absolute text-center text-zinc-100 text-opacity-90 text-[76px] font-bold font-Montserrat tracking-wide">
          AIR Beyond Compare
        </div>
        <div className="left-[442px] top-[688px] absolute text-center text-zinc-100 text-[28px] font-normal font-Montserrat tracking-wide">
          Explore the best Air Max for fall & beyond
        </div>
      </div>
      <div className="flex items-center justify-center mb-10 ">
        <div className="w-[150px] h-2.5 bg-pink-400 rounded-[25px]" />
      </div>
      <div className="flex items-end justify-end mb-10  mr-[150px] text-white font-semibold font-Montserrat text-2xl space-x-3">
        <Link href={"/show-products"}>Show all Products</Link>
        <div>
          <Image src={Arrow} alt={""}></Image>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-24">
        {products.map((product, index) => (
          <Articles
            key={product.p_id}
            name={product.p_name}
            price={product.p_price}
            image={product.p_image}
          ></Articles>
        ))}
      </div>

      <div className="flex items-center justify-center mt-20 mb-20">
        <div className="w-[150px] h-2.5 bg-pink-400 rounded-[25px]" />
      </div>
    </div>
  );
}
export default Hero;
