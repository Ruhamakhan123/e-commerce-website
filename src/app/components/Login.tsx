"use client";
import React, { useState } from "react";
import nike from "../../../public/shubham-mittal-sCXmwaVrBio-unsplash.jpg";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast/headless";
function Login() {
  const userEmail = "admin@admin.com";
  const userPassword = "admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  function emailHandler(event: { target: { value: any } }) {
    setEmail(event.target.value);
  }
  function passwordHandler(event: { target: { value: any } }) {
    setPassword(event.target.value);
  }

  function handleClick() {
    if (userEmail === email) {
      if (userPassword === password) {
        router.push("/");
        toast.success("Login Successfully");
      } else {
        toast.error("Incorrect password!!!");
      }
    } else {
      toast.error("User Not Found");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-start justify-start rounded-xl shadow-lg bg-zinc-800 w-[950px] h-[650px]">
        <div className="flex items-start justify-start rounded-xl">
          <Image
            src={nike}
            alt={""}
            className="w-[560px] h-[650px] rounded-xl"
          ></Image>
        </div>
        <div className="flex flex-col p-10 space-y-3">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-[#cccccc] font-Montserrat ">
              Log In
            </h2>
          </div>

          <div>
            <p className="mb-3 font-medium text-[#cccccc]">Email</p>
            <div className="mb-4 flex flex-col">
              <div className=" relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                <input
                  type="email"
                  id="signup-email"
                  className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none"
                  placeholder="Enter your email"
                  onChange={emailHandler}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 font-medium text-[#cccccc]">Password</p>
            <div className="mb-5 flex flex-col">
              <div className=" relative flex overflow-hidden rounded-md border-2 transition">
                <input
                  type="password"
                  id="signup-password"
                  className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none"
                  placeholder="Enter your Password"
                  onChange={passwordHandler}
                />
              </div>
            </div>
          </div>
          <div className="hover:shadow-blue-600/40 rounded-xl text-center  bg-gradient-to-r   from-[#6c72cb] to-[#cb69c1] px-9 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
            <button onClick={handleClick}>Login In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
