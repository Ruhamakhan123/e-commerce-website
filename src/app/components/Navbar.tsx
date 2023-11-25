"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/icons8-nike-50.png";
import Search from "../../../public/search.png";
import Account from "../../../public/Account.png";

function Navbar() {
  return (
    <div className="flex items-start justify-between p-10 ">
      <div className="flex items-center justify-between w-full">
        <div className="w-[143px] h-[51px] relative flex-col justify-start items-start inline-flex">
          <Image src={Logo} className="" alt={""}></Image>
        </div>
        <div className="flex items-center justify-between space-x-7">
          <div className="text-zinc-100  text-[20px] font-medium font-Montserrat">
            New Releases
          </div>
          <div className="text-zinc-100 text-[20px] font-medium font-Montserrat">
            Men
          </div>
          <div className="text-zinc-100 text-[20px] font-medium font-Montserrat">
            Women
          </div>
          <div className="text-zinc-100 text-[20px] font-medium font-Montserrat">
            Kids
          </div>
          <div className="text-zinc-100 text-[20px] font-medium font-Montserrat">
            Sale
          </div>
          <div className="text-zinc-100 text-[20px] font-medium font-Montserrat">
            Gifts
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-8 h-8 relative flex-col justify-start items-start inline-flex">
            <Image src={Search} alt={""}></Image>
          </div>
          <div className="w-8 h-8 relative flex-col justify-start items-start inline-flex">
            <Image src={Account} alt={""}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
