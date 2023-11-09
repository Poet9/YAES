/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

function Card({
    data,
    popupFunc,
    ...props
}: {
    data: {
        id: string;
        name: string;
        img: string;
        description: string | undefined;
        price: string | number;
    };
    popupFunc: (data: any) => void;
}) {
    return (
        <div
            onClick={popupFunc}
            id={data.id}
            className="flex flex-col w-64 shadow-2xl shadow-indigo-700/50 bg-zinc-200/25 cursor-pointer rounded-md border-2 border-zinc-200/25"
        >
            <img
                src={data.img}
                alt={data.img}
                width={256}
                height={256}
                className="object-cover rounded-t-lg w-64 h-48"
            />
            <h2 className="h-8 p-2 w-52  truncate text-lg">{data.name.toUpperCase()}</h2>
            <p className=" h-16 p-2 text-sm opacity-50 overflow-y-hidden">
                {data.description || ""}
            </p>
            <span className=" w-fit  ml-auto mx-4 p-1 rounded-xl border-1 bg-stone-500/25">
                {data.price || 502} <strong>DZD</strong>
            </span>
        </div>
    );
}

export default Card;
