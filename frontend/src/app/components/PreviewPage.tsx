"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Shoes {
  productID: number;
  productName: string;
  productDes: string;
  productPrice: number;
  productImage: string;
  categoryId: number;
  colorId: number;
  sizeId: number;
  name: string;
  size_name: string;
  color_name: string;
}

interface Review {
  review_id: number;
  user_review: string;
  sentiment: string;
}

function PreviewPage() {
  const router = useRouter();
  const [product, setProduct] = useState<Shoes>([]);
  const [review, setReview] = useState<Review>([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/products/${id}`);
        setProduct(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/products/review/${id}`
        );
        setReview(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (productID: number) => {
    router.push(`/payment/${productID}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-white font-medium text-[30px] tracking-widest mt-5">
        Choosen Product
      </h1>

      <div
        className="bg-black shadow-lg shadow-slate-400 -mt-24"
        style={{ transform: "scale(0.7)" }}
      >
        <div className="flex space-x-5">
          <div>
            <Image
              src={product?.productImage}
              alt={"shoe"}
              width={1000}
              height={1000}
            />
          </div>

          <div className="flex flex-col px-20 py-10 space-y-24 text-white">
            <div>
              <h1 className="font-thin max-w-md text-5xl py-10 tracking-widest">
                {product.productName}
              </h1>
              <h1 className="tracking-widest text-xl">{product.name} Shoe</h1>
            </div>

            <p className="max-w-md text-xl">{product.productDes}</p>

            <div className="flex flex-col space-y-3 text-white">
              <div className="flex flex-col space-y-2">
                <h1 className="tracking-wider text-3xl">Product Name</h1>
                <h1 className="font-thin tracking-widest text-2xl">
                  {product.productName}
                </h1>
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="tracking-wider text-3xl">Product Size</h1>
                <h1 className="font-thin tracking-widest text-2xl">
                  {product.size_name}
                </h1>
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="tracking-wider text-3xl">Product Color</h1>
                <h1 className="font-thin tracking-widest text-2xl">
                  {product.color_name}
                </h1>
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="tracking-wider text-3xl">Product Review</h1>
                <h1 className="font-thin tracking-widest text-2xl">
                  {review.sentiment}
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold">${product.productPrice}</h1>
            </div>

            <button
              onClick={() => handleClick(product.productID)}
              className="text-black bg-white rounded-full px-20 py-5 border-b-4 text-lg hover:opacity-80 border-zinc-300 tracking-widest"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewPage;
