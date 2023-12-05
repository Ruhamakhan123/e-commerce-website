"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  img: string;
  name: string;
  category: string;
  price: number;
};

function ProductCard({ img, name, category, price }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-pink-400 bg-opacity-20 rounded-md shadow-2xl">
        <div>
          <Image width={300} height={300} src={img} alt="shoe" />
        </div>
        <div className="px-2 py-5">
          <div className="flex flex-col space-y-2 text-white mt-5">
            <h1 className="font-bold">{name}</h1>
            <h1>{category}</h1>
            <h1>{price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
