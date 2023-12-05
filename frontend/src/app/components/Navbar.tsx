"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/icons8-nike-50.png";
import Search from "../../../public/search.png";
import Account from "../../../public/Account.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="flex items-start justify-between p-10 ">
      <div className="flex items-center justify-between w-full">
        <div className="w-[143px] h-[51px] relative flex-col justify-start items-start inline-flex">
          <Image
            src={Logo}
            className="hover:cursor-pointer"
            alt={"logo"}
            onClick={handleClick}
          ></Image>
        </div>
        <div className="flex items-center justify-center space-x-28 mr-96">
          <div className="group">
            <Link
              className="group-hover:border-b-4 group-hover:border-white transisition-all duration-100 py-2 text-zinc-100 text-[20px] font-medium font-Montserrat"
              href={"/"}
            >
              Men
            </Link>
          </div>
          <div className="group">
            <Link
              className="group-hover:border-b-4 group-hover:border-white transisition-all duration-100 py-2 text-zinc-100 text-[20px] font-medium font-Montserrat"
              href={"/"}
            >
              Women
            </Link>
          </div>
          <div className="group">
            <Link
              className="group-hover:border-b-4 group-hover:border-white transisition-all duration-100 py-2 text-zinc-100 text-[20px] font-medium font-Montserrat"
              href={"/"}
            >
              Kids
            </Link>
          </div>
          <div className="group">
            <Link
              className="group-hover:border-b-4 group-hover:border-white transisition-all duration-100 py-2 text-zinc-100 text-[20px] font-medium font-Montserrat"
              href={"/"}
            >
              Sale
            </Link>
          </div>
          <div className="group">
            <Link
              className="group-hover:border-b-4 group-hover:border-white transisition-all duration-100 py-2 text-zinc-100 text-[20px] font-medium font-Montserrat"
              href={"/"}
            >
              Gifts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
