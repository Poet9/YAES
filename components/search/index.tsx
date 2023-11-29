"use client";

import { Input } from "@/components/input";
import Form from "../form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { searchFunction } from "./helper";

function Search({
    hideSidebar,
    className,
    ...props
}: {
    hideSidebar: () => void;
    className: string | undefined;
}) {
    const getSearchResult = async (e: any) => {
        e.preventDefault();
        hideSidebar();
        console.log("we are sarching for items stay tuned");
        const name = e.target.querySelector("input").value;
        const res = await searchFunction(name);
        console.log(res);
    };
    return (
        <Form
            id="qmlkgjqmljqfnkqmfdshqn"
            name="searchBar"
            className={`flex bg-slate-800/25  rounded-md hover:opacity-75 ${className || ""}`}
            submit={getSearchResult}
        >
            <Input
                className="ml-1 py-1 w-full md:w-96 autofocus"
                placeholder="search for items..."
                required
            />
            <button type="submit" className="px-3  rounded  ">
                <MagnifyingGlassIcon className="w-6 h-5" />
            </button>
        </Form>
    );
}

export default Search;
