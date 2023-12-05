"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
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
}

function page() {
  const router = useRouter();
  const [product, setProduct] = useState<Shoes[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/products/all");
        setProduct(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (productID: number) => {
    router.push(`/product/${productID}`);
  };

  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-4 gap-y-10 gap-x-3">
        {product.map((item) => (
          <div onClick={() => handleClick(item.productID)}>
            <ProductCard
              key={item.productID}
              name={item.productName}
              category={item.name}
              price={item.productPrice}
              img={item.productImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
