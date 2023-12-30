"use client";

import Image from "next/image";
import useToggleStore from "../store";
import Link from "next/link";
import profilepic from "@/public/images/profilepic.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Sidemenu = () => {
  const { isClick } = useToggleStore();

  return (
    <aside className={`${!isClick && "max-sm:hidden"} side-menu`}>
      <div className="side-menu-container">
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
            <Image
              src={profilepic}
              alt="Sachin's Portfolio Picture"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="lg:text-lg font-bold">Sachin Lakshan</div>
        </div>
        <div>
          <ul className="">
            <li className="active-link">
              <Link href="/">Home</Link>
            </li>
            <li className="inactive-link">
              <Link href="/about">About</Link>
            </li>
            <li className="inactive-link">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="inactive-link">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="inactive-link">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5 lg:hidden">
          <BiLogoGmail size="20" />
          <FaLinkedin size="20" />
          <FaGithub size="20" />
          <FaMedium size="20" />
        </div>
        <div className="max-lg:hidden px-4">
          <div className="flex flex-row space-x-5 mb-2 justify-center">
            <BiLogoGmail size="20" />
            <FaLinkedin size="20" />
            <FaGithub size="20" />
            <FaMedium size="20" />
          </div>
          <div className="text-sm text-center">
            Copyright © {new Date().getFullYear()} Sachin Lakshan. All rights
            reserved.
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidemenu;
