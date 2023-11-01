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
        /**  here try to fetch the user inside a useEffect hook
         * if it is avalable then render an icon with user details
         * else render the sign in button
         */
        console.log("I am from the useEffect duuude", bgColor);
    }, []);

    return (
        <header className="absolute w-full flex justify-between bg-white-200/[0.3]">
            <button
                onClick={() => setshowSidebar(!showSidebar)}
                className="flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none md:hidden hover:bg-slate-300"
            >
                <Bars3Icon className="mx-2 w-7 h-7 " />
            </button>
            <aside
                className={`flex flex-col fixed top-0 left-0 w-4/6 h-full backdrop-blur-md overflow-y-auto transition-all duration-300 justify-start border-2 md:bg-transparent md:w-full md:border-none md:flex md:flex-row md:justify-between md:static ${
                    showSidebar ? " visible" : " hidden"
                } ${showSidebar && bgColor}`}
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
                <Search hideSidebar={() => showSidebar && setshowSidebar(false)} />
                <Nav />
                <div className="flex flex-col md:flex-row bg-inherit">
                    <ThemeButton hideSideBar={() => showSidebar && setshowSidebar(false)} />
                    <Sign />
                </div>
            </aside>
        </header>
    );
});
export default Header;
