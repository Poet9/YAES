/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { Item } from "@/types/types";

function CartCard({ data, ...props }: { data: Item }) {
    const removeItemHandler = (id: string | number) => {};
    return (
        <div
            id={data.id}
            className=" relative flex shadow-xl flex-col w-full sm:w-8/12 mx-auto my-4 md:flex-row md:w-fit max-w-[1000px]  shadow-indigo-700/50 bg-zinc-200/25 cursor-pointer rounded-md border-2 border-zinc-200/25"
        >
            <img
                src={data.image}
                alt={"product image"}
                className="object-contain rounded-t-lg  h-48"
            />
            <div className="absolute top-2 right-2 rounded p-1">
                <XMarkIcon className="h-5 w-5" onClick={() => removeItemHandler(data.id)} />
            </div>
            <div className="p-4">
                <h2 className="h-8 p-2  truncate text-lg">{data.title.toUpperCase()}</h2>
                <p className=" h-16 p-2 text-sm opacity-50 overflow-y-hidden">
                    {data.description || ""}
                </p>
                <div className="flex justify-between my-2">
                    <span className="px-2 rounded bg-zinc-200/25">{data.price}$</span>
                    <p className="flex text-[10px] font-extralight">
                        <StarIcon
                            className={`w-4 h-4 ${data.rating.rate > 1 && "text-orange-300"}`}
                        />
                        <StarIcon
                            className={`w-4 h-4 ${data.rating.rate > 2 && "text-orange-300"}`}
                        />
                        <StarIcon
                            className={`w-4 h-4 ${data.rating.rate > 3 && "text-orange-300"}`}
                        />
                        <StarIcon
                            className={`w-4 h-4 ${data.rating.rate > 4 && "text-orange-300"}`}
                        />
                        <StarIcon
                            className={`w-4 h-4 ${data.rating.rate > 5 && "text-orange-300"}`}
                        />
                        {data.rating.count > 1000
                            ? `${Math.floor(data.rating.count / 100)}k`
                            : data.rating.count}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
