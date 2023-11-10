"use client";

import { useEffect, useState } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = ({
    className = "",
    hideSideBar,
    ...props
}: {
    className: string;
    hideSideBar: () => void;
}) => {
    const [mounted, setMounted] = useState(false);
    const [theme, settheme] = useState("dark");
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }
    const changeTheme = () => {
        hideSideBar();
        if (document.querySelector("html")?.getAttribute("data-theme") === "dark") {
            document.querySelector("html")?.setAttribute("data-theme", "light");
            settheme("light");
        } else {
            document.querySelector("html")?.setAttribute("data-theme", "dark");
            settheme("dark");
        }
    };

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            title="change theme"
            className={`flex items-center justify-center rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 ${className}`}
            onClick={changeTheme}
        >
            {theme === "dark" ? (
                <SunIcon title="Theme" className="h-5 m-2 w-5 text-orange-300" />
            ) : (
                <MoonIcon title="Theme" className="h-5 m-2 w-5 text-slate-800" />

            )}
        </button>
    );
};

export default ThemeButton;
