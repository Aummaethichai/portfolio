"use client";

import { useEffect, useState } from "react";
// import Avatar from '@mui/material/Avatar';
import profile from "../../../public/images/profile.jpeg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import NavbarItem from "./NavbarItem";

const NavbarPage = () => {
  const [short_menu, setMenu] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const pathname = usePathname();

  const handleMenu = () => {
    setMenu(!short_menu);
  };

  const toggleTheme = () => {
    setIsLightTheme((prev) => {
      const newTheme = !prev;
      // ลบ dark class ถ้ามี ก่อนที่จะเพิ่ม light class
      document.documentElement.classList.remove("light", "dark");

      // เพิ่ม class ตามค่า newTheme
      if (newTheme) {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.add("dark");
      }
      // บันทึกค่า theme ลง localStorage
      localStorage.setItem("theme", newTheme ? "light" : "dark");

      return newTheme;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsLightTheme(false);
    } else {
      document.documentElement.classList.remove("dark");
      setIsLightTheme(true);
    }
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 ">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <button className="rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                <Link href="/">
                  <Image
                    alt="Maethichai"
                    width={30}
                    src={profile}
                    // placeholder="blur"
                    className="h-9 w-9 rounded-full"
                  />
                </Link>
              </button>
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <div
                className="pointer-events-auto md:hidden"
                data-headlessui-state=""
              >
                <button
                  className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:Rbmiqja:"
                  onClick={handleMenu}
                >
                  Menu
                  <svg
                    viewBox="0 0 8 6"
                    aria-hidden="true"
                    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                  >
                    <path
                      d="M1.75 1.75 4 4.25l2.25-2.5"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                hidden={short_menu}
                style={{
                  position: "fixed",
                  top: "1px",
                  left: "1px",
                  width: "1px",
                  height: "0",
                  padding: "0",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  borderWidth: "0",
                  display: "none",
                }}
              ></div>
              <nav className="pointer-events-auto hidden md:block">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  <li>
                    <Link className="" href="/about">
                      <NavbarItem
                        selected={pathname === "/about"}
                        label="About"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link className="" href="/">
                      <NavbarItem selected={pathname === "/"} label="Home" />
                    </Link>
                  </li>
                  <li>
                    <Link className="" href="/projects">
                      <NavbarItem
                        selected={pathname === "/projects"}
                        label="Projects"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="" href="/skills">
                      <NavbarItem
                        selected={pathname === "/skills"}
                        label="Skills"
                      />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <button
                  type="button"
                  aria-label={`Switch to ${
                    isLightTheme ? "light" : "dark"
                  } theme`}
                  onClick={toggleTheme}
                  className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                >
                  {isLightTheme ? (
                    //light
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                    >
                      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                      <path
                        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                        fill="none"
                      ></path>
                    </svg>
                  ) : (
                    //dark
                    <svg
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700"
                    >
                      <path
                        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {short_menu && (
        <div className="fixed w-full">
          <div
            className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
            id="headlessui-popover-backdrop-:Rjmiqja:"
            aria-hidden="true"
            data-headlessui-state="open"
            data-open=""
            //   style=""
          >
            <div
              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
              id="headlessui-popover-panel-:Rrmiqja:"
              tabIndex={-1}
              data-headlessui-state="open"
              data-open=""
              style={{ width: "3/4" }}
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <button
                  aria-label="Close menu"
                  className="-m-1 p-1"
                  type="button"
                  data-headlessui-state="open active"
                  data-open=""
                  data-active=""
                  onClick={handleMenu}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                  >
                    <path
                      d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                  <li>
                    <Link
                      className="block py-2"
                      data-headlessui-state="open active"
                      data-open=""
                      data-active=""
                      href="/"
                      onClick={handleMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2"
                      data-headlessui-state="open active"
                      data-open=""
                      data-active=""
                      href="/about"
                      onClick={handleMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2"
                      data-headlessui-state="open active"
                      data-open=""
                      data-active=""
                      href="/expreience"
                      onClick={handleMenu}
                    >
                      Expreience
                    </Link> 
                    {/* รอแก้เป็น exprience */}
                  </li>
                  <li>
                    <Link
                      className="block py-2"
                      data-headlessui-state="open active"
                      data-open=""
                      data-active=""
                      href="/projects"
                      onClick={handleMenu}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2"
                      data-headlessui-state="open active"
                      data-open=""
                      data-active=""
                      href="/skills"
                      onClick={handleMenu}
                    >
                      Skills
                    </Link> 
                  </li>
                  {/* <li>
                    <Link
                      className="block py-2"
                      data-headlessui-state="open active"
                      data-open=""
                      data-active=""
                      href="/uses"
                      onClick={handleMenu}
                    >
                      Uses
                    </Link>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarPage;
