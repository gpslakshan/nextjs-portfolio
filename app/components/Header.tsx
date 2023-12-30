"use client";

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import useToggleStore from "../store";
import Link from "next/link";

const Header = () => {
  const { isClick, toggle } = useToggleStore();

  return (
    <div className="w-full bg-slate-50 max-sm:p-5 p-3">
      <div className="w-full mb-5 flex flex-row justify-between items-center md:hidden">
        <Link href="/">
          <h1>
            <span className="text-blue-600">Sachin</span> Lakshan
          </h1>
        </Link>
        <CiMenuFries
          color="black"
          size="25"
          onClick={() => toggle()}
          className={`${isClick && "hidden"}`}
        />
        <IoMdClose
          color="black"
          size="25"
          onClick={() => toggle()}
          className={`${!isClick && "hidden"}`}
        />
      </div>
      <div className="md:flex md:flex-row md:justify-between md:items-center">
        <div className="flex flex-row items-center space-x-2 mb-2">
          <IoMail />
          <div className="font-bold text-sm">sachinlakshan04@gmail.com</div>
        </div>
        <button className="btn-primary">Download CV</button>
      </div>
    </div>
  );
};

export default Header;
