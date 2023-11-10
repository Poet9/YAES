/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

import largeBg from "@/ressources/largeBg.jpg";
import { useState } from "react";
import { pics } from "./data";

function Carousel() {
    const [imageFocus, setimageFocus] = useState(0);

    return (
        <div className="relative w-screen  h-[80vh] overflow-hidden">
            <div
                className="flex transition h-[80vh] ease-out duration-40"
                style={{ transform: `translateX(-${imageFocus * 100}%)` }}
            >
                {pics.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt=" "
                        className="object-center h-inherit object-cover w-[100vw]"
                    />
                ))}
            </div>
            <div className="flex  bg-transparent justify-center gap-4 w-sceen -translate-y-10 ">
                {pics.map((url, index) => (
                    <span
                        onClick={() => setimageFocus(index)}
                        key={"carousel_picker_" + index}
                        className={`rounded-full w-5 h-1 hover:bg-white cursor-pointer  ${
                            index === imageFocus ? "bg-white" : "bg-gray-500"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;