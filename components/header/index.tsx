"use client";
import ThemeButton from "./themeButton";
import Nav from "./nav";
import Sign from "@/components/signIn";
import { forwardRef, useEffect } from "react";

type headerProps = React.HTMLAttributes<HTMLHeadingElement>;
const Header = forwardRef<HTMLHeadingElement, headerProps>(function Bala(
    { children, ...props },
    ref
) {
    useEffect(() => {
        /**  here try to fetch the user inside a useEffect hook
         * if it is avalable then render an icon with user details
         * else render the sign in button
         */
        console.log("I am from the useEffect duuude");
    }, []);

    return (
        <header className="py-4 flex justify-between">
            <Nav />
            <ThemeButton />
            {<Sign />}
        </header>
    );
});
export default Header;
