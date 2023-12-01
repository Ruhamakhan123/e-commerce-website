"use client";
import React from "react";

import Image from "next/image";
import Logo from "../../../public/icons8-nike-50.png";
import Search from "../../../public/search.png";
import Account from "../../../public/Account.png";
import Link from "next/link";

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
        <div className="flex space-x-5">
          <div className="relative flex-col justify-start items-start inline-flex pr-10">
            <div>
              <input
                type="text"
                className="py-2 px-2 bg-zinc-900 text-white border-b-2 border-gray-400"
                placeholder="Search.."
              />
            </div>
          </div>
          <div className="w-8 h-8 relative flex-col justify-start items-start inline-flex">
            <Image src={Account} alt={""}></Image>
          </div>
          <div className="text-zinc-100 font-Montserrat">
            <Link href={"/SignUp"}> Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
