import React from "react";
import Image from "next/image";
import nike from "../../../public/shubham-mittal-sCXmwaVrBio-unsplash.jpg";
import Link from "next/link";
function SignUp() {
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
          <h2 className="mb-2 text-3xl font-bold text-[#cccccc] font-Montserrat ">
            Sign Up
          </h2>
          <a href="#" className=" block font-bold text-[#cccccc]">
            Have an account?{" "}
            <Link
              href={"/Login"}
              className="hover:text-gray-600 hover:underline"
            >
              Login
            </Link>
          </a>

          <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row"></div>
          <p className="mb-1 font-medium text-[#cccccc]">First Name</p>
          <div className="mb-4 flex flex-col">
            <div className=" relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                type="fname"
                id="fname"
                className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none"
                placeholder="Enter your First Name"
              />
            </div>
          </div>
          <p className="mb-1 font-medium text-[#cccccc]">Last Name</p>
          <div className="mb-4 flex flex-col">
            <div className=" relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                type="lname"
                id="lname"
                className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          <p className="mb-1 font-medium text-[#cccccc]">Email</p>
          <div className="mb-4 flex flex-col">
            <div className=" relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                type="email"
                id="signup-email"
                className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none"
                placeholder="Enter your email"
              />
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
                  placeholder="Choose a password "
                />
              </div>
            </div>
          </div>
          <button className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r   from-[#6c72cb] to-[#cb69c1] px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
// <div className="flex items-center justify-center min-h-screen">
//   <div className="flex items-start justify-start rounded-xl shadow-lg bg-zinc-500 w-[750px] h-[650px]">
//     <div>
//       <Image src={nike} alt={""}></Image>
//     </div>
//     <div>
//       <h1>Sign up</h1>
//     </div>
//   </div>
{
  /* <div className="text-white">
        <Image src={nike} alt={""} className=" w-[700px] h-[750px]"></Image>
      </div>
      <div className="flex flex-col w-[700px] h-[750px] tracking-[2px] space-y-5">
        <div>
          <h1 className="mt-16 text-white text-3xl ">
            Sign up your Account
          </h1>
        </div>
        <div>
          <p className="mb-1 font-medium text-white">Email</p>
        </div>
        <div className="mb-4 flex flex-col">
          <div className=" relativeflex overflow-hidden   transition ">
            <input
              type="email"
              id="signup-email"
              className="w-15 border-gray-300 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div> */
}
