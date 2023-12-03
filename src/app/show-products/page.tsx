import React from "react";
import Card from "../components/Card";
import Articles from "../components/Articles";
import ProductCard from "../components/ProductCard";

function page() {
  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default page;
