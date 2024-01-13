"use client";

import Image from "next/image";
import useToggleStore from "../store";
import Link from "next/link";
import profilepic from "@/public/images/profilepic.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useState, useEffect } from "react";
import { sidebarMenuLinks } from "@/constants";

const Sidemenu = () => {
  const [activeRoute, setActiveRoute] = useState<string>("home");
  const { isClick, toggle } = useToggleStore();

  function handleClick(route: string): void {
    setActiveRoute(route);
    toggle();
  }

  function handleScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sidebarMenuLinks) {
      const element = document.getElementById(section.sectionId);

      if (
        element &&
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.offsetHeight > scrollPosition
      ) {
        setActiveRoute(section.sectionId);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scroll to top on reload
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <aside className={`${!isClick && "hidden md:block"} side-menu`}>
      <div className="side-menu-container">
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] mt-[50px] md:mt-0">
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
            <Link href="#home">
              <li
                className={
                  activeRoute === "home" ? "active-link" : "inactive-link"
                }
                onClick={() => handleClick("home")}
              >
                Home
              </li>
            </Link>
            <Link href="#about">
              <li
                className={
                  activeRoute == "about" ? "active-link" : "inactive-link"
                }
                onClick={() => handleClick("about")}
              >
                About
              </li>
            </Link>
            <Link href="#skills">
              <li
                className={
                  activeRoute == "skills" ? "active-link" : "inactive-link"
                }
                onClick={() => handleClick("skills")}
              >
                Skills
              </li>
            </Link>
            <Link href="#projects">
              <li
                className={
                  activeRoute == "projects" ? "active-link" : "inactive-link"
                }
                onClick={() => handleClick("projects")}
              >
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li
                className={
                  activeRoute == "contact" ? "active-link" : "inactive-link"
                }
                onClick={() => handleClick("contact")}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden">
          <Link href="mailto:sachinlakshan04@gmail.com">
            <BiLogoGmail size="20" className="mb-3" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sachin-lakshan/"
            target="_blank"
          >
            <FaLinkedin size="20" className="mb-3" />
          </Link>
          <Link href="https://github.com/gpslakshan" target="_blank">
            <FaGithub size="20" className="mb-3" />
          </Link>
          <Link href="https://medium.com/@gpslakshan" target="_blank">
            <FaMedium size="20" className="mb-3" />
          </Link>
        </div>
        <div className="max-lg:hidden px-4">
          <div className="flex flex-row space-x-5 mb-2 justify-center">
            <Link href="mailto:sachinlakshan04@gmail.com">
              <BiLogoGmail size="20" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sachin-lakshan/"
              target="_blank"
            >
              <FaLinkedin size="20" />
            </Link>
            <Link href="https://github.com/gpslakshan" target="_blank">
              <FaGithub size="20" />
            </Link>
            <Link href="https://medium.com/@gpslakshan" target="_blank">
              <FaMedium size="20" />
            </Link>
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
