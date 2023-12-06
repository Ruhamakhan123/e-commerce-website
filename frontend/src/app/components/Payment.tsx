"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useParams } from "next/navigation";
import axios from "axios";
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

function Payment() {
  const router = useRouter();
  const { id } = useParams();
  const [payDetails, setPayDetails] = useState({
    product_id: "",
    order_id: "",
    order_date: "",
    card_name: "",
    cvv: "",
    exp_date: "",
    card_number: "",
    address: "",
  });
  const [product, setProduct] = useState<Shoes>([]);
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

  const handleChange = (e: any) => {
    const value = e.target.value;
    console.log(value);
    setPayDetails({ ...payDetails, [e.target.name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8800/api/products/payment/",
        {
          product_id: product.productID,
          order_id: payDetails.order_id,
          order_date: payDetails.order_date,
          card_name: payDetails.card_name,
          cvv: payDetails.cvv,
          exp_date: payDetails.exp_date,
          card_number: payDetails.card_number,
          address: payDetails.address,
        }
      );
      toast.success("Order Placed");
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen space-y-4"
      style={{ transform: "scale(0.7)" }}
    >
      <div className="flex bg-black">
        <div>
          <Image
            src={product.productImage}
            alt="shoe"
            width={900}
            height={900}
          />
        </div>
        <div className="flex flex-col px-24 py-10 border-l-2 border-zinc-500 shadow-2xl shadow-zinc-400">
          <h1 className="text-white font-thin text-5xl tracking-widest">
            CHECKOUT
          </h1>

          <div className="flex text-white flex-col space-y-10 mt-10">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2">
                <h1 className="tracking-wider text-xl">Product Name</h1>
                <h1 className="font-thin tracking-widest text-md">
                  {product.productName}
                </h1>
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="tracking-wider text-xl">Product Category</h1>
                <h1 className="font-thin tracking-widest text-md">
                  {product.name}
                </h1>
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="tracking-wider text-xl">Product Size</h1>
                <h1 className="font-thin tracking-widest text-md">
                  {product.size_name}
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mt-2">
                ${product.productPrice}
              </h1>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-white">Address</label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg border-2 border-zinc-300 text-black"
                name="address"
                value={payDetails.address}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-white">Name on Card</label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg border-2 border-zinc-300 text-black"
                name="card_name"
                value={payDetails.card_name}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-white">Credit Card Number</label>
              <input
                type="text"
                className="outline-none px-5 py-2 rounded-lg border-2 border-zinc-300 text-black"
                name="card_number"
                value={payDetails.card_number}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="flex space-x-8 mt-10">
            <div className="flex flex-col space-y-3">
              <label className="text-white">Expiry Date</label>
              <input
                type="number"
                className="outline-none w-[100px] h-[40px] rounded-lg border-2 border-zinc-300 px-2 text-black"
                name="exp_date"
                value={payDetails.exp_date}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-white">CVC</label>
              <input
                type="password"
                className="outline-none w-[100px] h-[40px] rounded-lg border-2 border-zinc-300 px-2 text-black"
                name="cvv"
                value={payDetails.cvv}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <button
            className="text-black bg-white rounded-full px-20 py-4 border-b-4 text-lg hover:opacity-80 border-zinc-300 tracking-widest mt-16"
            onClick={handleSubmit}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
