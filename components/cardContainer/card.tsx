/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

function Card({
    data,
    ...props
}: {
    data: {
        id: string;
        title: string;
        imgs: string[];
        body: string;
        price: string | number;
    };
}) {
    return (
        <div
            id={data.id}
            className="flex drop-shadow bg-zinc-200/25 cursor-pointer rounded-md border-1/25  flex-col w-64"
        >
            <img
                src={data.imgs ? data.imgs[0] : "https://via.placeholder.com/600/92c952"}
                alt="product"
                width={256}
                height={256}
                className="object-cover rounded-t-lg w-64 h-48"
            />
            <h2 className="h-8 p-2 w-52  truncate text-lg">{data.title.toUpperCase()}</h2>
            <p className=" h-16 p-2 text-sm opacity-50 overflow-y-hidden">{data.body}</p>
            <span className=" w-fit  ml-auto mx-4 p-1 rounded-xl border-1 bg-stone-500/25">
                {data.price || 502} <strong>DZD</strong>
            </span>
        </div>
    );
}

export default Card;
