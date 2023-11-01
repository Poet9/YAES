"use client";

import { Input } from "@/components/input";
import Form from "../form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Search({ hideSidebar, ...props }: { hideSidebar: () => void }) {
    const getSearchResult = (e: any) => {
        e.preventDefault();
        hideSidebar();
        console.log("we are sarching for items stay tuned");
    };
    return (
        <Form
            id=""
            name="searchBar"
            className="flex bg-slate-800/25  rounded-md w-full md:w-fit hover:opacity-75"
            submit={getSearchResult}
        >
            <Input
                className="ml-1 p-2 w-full  lg:w-96 md:w-32 autofocus"
                placeholder="search for items..."
            />
            <button type="submit" className="px-3  rounded  ">
                <MagnifyingGlassIcon className="w-6 h-5" />
            </button>
        </Form>
    );
}

export default Search;
