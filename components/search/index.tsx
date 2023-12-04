"use client";

import { Input } from "@/components/input";
import Form from "../form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { searchFunction } from "./helper";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

function Search({
    hideSidebar,
    className,
    ...props
}: {
    hideSidebar: () => void;
    className: string | undefined;
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const getSearchResult = async (e: any) => {
        e.preventDefault();
        hideSidebar();
        const name = e.target.querySelector("input").value;
        const myParams = new URLSearchParams(searchParams);
        if (name) {
            myParams.set("query", name);
        } else {
            myParams.delete("query");
        }
        replace(`${pathname}?${myParams.toString()}`);
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
            />
            <button type="submit" className="px-3  rounded  ">
                <MagnifyingGlassIcon className="w-6 h-5" />
            </button>
        </Form>
    );
}

export default Search;
