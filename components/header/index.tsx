"use client";
import ThemeButton from "./themeButton";
import Nav from "./nav";
import Sign from "@/components/signIn";
import { forwardRef, useEffect, useState } from "react";

import { CircleStackIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Search from "@/components/search";
import { Session } from "inspector";

var bgColor = "";
type headerProps = React.HTMLAttributes<HTMLHeadingElement>;
const Header = forwardRef<HTMLHeadingElement, headerProps>(function Bala(
    { children, ...props },
    ref
) {
    const [showSidebar, setshowSidebar] = useState(false);
    try {
        if (document.getElementsByTagName("html")[0]?.getAttribute("data-theme") === "light") {
            bgColor = "bg-white";
        } else {
            bgColor = "bg-slate-800";
        }
    } catch (e) {
        console.log("... if you are a developer do this ...");
    }

    useEffect(() => {
        setshowSidebar(false);
        /**  here try to fetch the user inside a useEffect hook
         * if it is avalable then render an icon with user details
         * else render the sign in button
         */
        console.log("I am from the useEffect duuude", bgColor);
    }, []);

    return (
        <header className="absolute w-full h-fit backdrop-blur-md bg-white-200/[0.3]">
            <button
                onClick={() => setshowSidebar(!showSidebar)}
                className="flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none md:hidden hover:bg-slate-300"
            >
                <Bars3Icon className="mx-2 w-7 h-7 " title="menu" />
            </button>
            <aside
                className={`fixed top-0 left-0 z-10 ${bgColor} w-4/6 h-screen transition-all duration-300 border-2 md:h-full md:w-full md:flex md:bg-inherit md:border-none md:flex-row md:justify-between md:static ${
                    showSidebar ? " visible" : " hidden"
                }`}
            >
                <button
                    onClick={() => setshowSidebar(false)}
                    className=" md:hidden  rounded-md focus:outline-none ml-[90%] mr-2 my-2"
                >
                    <XMarkIcon className="mx-2 w-5 h-5 " title="close" />
                </button>
                <CircleStackIcon
                    href="/"
                    className="mx-2 w-10 h-10 cursor-pointer text-rose-800 hidden md:block"
                    title="logo"
                />
                <Search
                    className=" bg-inherit"
                    hideSidebar={() => showSidebar && setshowSidebar(false)}
                />
                <Nav className=" bg-inherit" />
                <div className="flex flex-col md:flex-row bg-inherit">
                    <ThemeButton hideSideBar={() => showSidebar && setshowSidebar(false)} />
                    <Sign />
                </div>
            </aside>
        </header>
    );
});
export default Header;
