"use client";
import ThemeButton from "./themeButton";
import Nav from "./nav";
import Sign from "@/components/signIn";
import { forwardRef, useEffect, useState } from "react";

import { CircleStackIcon, LockClosedIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Session } from "inspector";

type headerProps = React.HTMLAttributes<HTMLHeadingElement>;
const Header = forwardRef<HTMLHeadingElement, headerProps>(function Bala(
    { children, ...props },
    ref
) {
    const [showSidebar, setshowSidebar] = useState(false);
    useEffect(() => {
        /**  here try to fetch the user inside a useEffect hook
         * if it is avalable then render an icon with user details
         * else render the sign in button
         */
        console.log("I am from the useEffect duuude");
    }, []);
    
    return (
        <header className="py-2 flex justify-between bg-inherit">
            <button
                onClick={() => setshowSidebar(!showSidebar)}
                className="flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none md:hidden"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <aside
                className={`flex border-2 bg-inherit flex-col fixed top-0 left-0 w-4/6 h-full overflow-y-auto transition-all duration-300 justify-start md:w-full md:flex md:flex-row md:justify-between md:static ${
                    showSidebar ? " visible" : " hidden"
                }`}
            >
                <button
                    onClick={() => setshowSidebar(false)}
                    className=" md:hidden  rounded-md focus:outline-none ml-auto mr-2 my-2"
                >
                    <XMarkIcon href="/" className="mx-2 w-5 h-5 " title="logo" />
                </button>
                <CircleStackIcon
                    href="/"
                    className="mx-2 w-10 h-10 cursor-pointer text-rose-800 hidden md:block"
                    title="logo"
                />
                <Nav />
                <div className="flex flex-col md:flex-row">
                    <ThemeButton />
                    <Sign />
                </div>
            </aside>
        </header>
    );
});
export default Header;
