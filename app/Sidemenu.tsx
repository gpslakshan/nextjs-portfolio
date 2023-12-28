"use client";

import useToggleStore from "./store";
import Link from "next/link";

const Sidemenu = () => {
  const { isClick } = useToggleStore();

  return (
    <aside
      className={`bg-blue-500 max-sm:w-[180px] ${
        !isClick && "max-sm:hidden"
      } md:w-[300px] lg:w-[400px] z-10 h-screen`}
    >
      <div>Avatar</div>
      <div className="lg:text-lg font-bold">Sachin Lakshan</div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>Social Media Icons</div>
    </aside>
  );
};

export default Sidemenu;
