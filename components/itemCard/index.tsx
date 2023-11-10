/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

import Modal from "@/components/modal";
import { Item } from "@/types/types";
import Form from "@/components/form";
import { StarIcon } from "@heroicons/react/24/solid";

function Item({ product, ...props }: { product: Item }) {
    let [hiddenModal, sethiddenModal] = useState(true);
    const [imageUrl, setimageUrl] = useState("");
    const [sizeSelect, setsizeSelect] = useState("");
    useEffect(() => {
        if (product.image.length > 4) sethiddenModal(false);
        setimageUrl(product.image);
        return () => {
            sethiddenModal(true);
        };
    }, [product.id]);
    const disableScrollHandler = () => {
        try {
            if (!hiddenModal) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
        } catch (e: any) {
            console.log("you do not know!");
        }
    };
    disableScrollHandler();
    // render rating stars
    const handleBuying = (e: any) => {
        e.preventDefault();
        console.log("bsahtek bgs!!!");
    };
    const sizeSelectHandler = (e: any) => {
        const prevSize: any = document.getElementById(sizeSelect);
        if (prevSize) {
            prevSize.style.backgroundColor = "rgb(212 212 216)";
            prevSize.style.color = "rgb(100 116 139)";
        }
        e.target.style.backgroundColor = "#fff";
        e.target.style.color = "#000";
        console.log("it is working from select size");
        setsizeSelect(e.target.id);
    };
    return (
        <Modal
            title={product.title}
            id="doesntmatterjustafiller"
            className=" flex flex-col md:flex md:flex-row"
            hidden={hiddenModal}
            onClose={() => sethiddenModal(true)}
        >
            <div className="row-span-2 flex w-full md:w-[50%] justify-between flex-col items-center ">
                <img
                    src={imageUrl}
                    alt="wait"
                    className=" object-contain max-h-6/12 mb-2 rounded border-2"
                />
                <div className="flex w-full flex-start flex-nowrap overflow-x-scroll">
                    <img
                        src={product.image}
                        alt=""
                        onClick={(e: any) => setimageUrl(e.target?.src)}
                        className="w-16 h-16 object-cover cursor-pointer rounded mx-1 border-2"
                    />
                    <img
                        src={"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"}
                        alt=""
                        onClick={(e: any) => setimageUrl(e.target?.src)}
                        className="w-16 h-16 mx-1 cursor-pointer object-cover border-2"
                    />
                </div>
            </div>
            <Form
                id={product.id}
                className="row-span-1 flex flex-col w-full md:w-[50%] justify-around p-1"
                name={"item"}
                submit={handleBuying}
            >
                <h2 className="my-2 text-lg truncate">{product.title}</h2>
                <p className="h-24 overflow-y-hidden opacity-50">{product.description}</p>
                <ul className="flex" onClick={(e) => sizeSelectHandler(e)}>
                    <li
                        id={`size_S`}
                        onClick={(e) => sizeSelectHandler(e)}
                        className="mx-2  text-center w-8 border-2 border-slate-500 rounded-lg cursor-pointer bg-zinc-300 text-slate-600 hover:bg-zinc-50"
                    >
                        S
                    </li>
                    <li
                        id={`size_M`}
                        onClick={(e) => sizeSelectHandler(e)}
                        className="mx-2  text-center w-8 border-2 border-slate-500 rounded-lg cursor-pointer bg-zinc-300 text-slate-600 hover:bg-zinc-50"
                    >
                        M
                    </li>
                    <li
                        id={`size_L`}
                        onClick={(e) => sizeSelectHandler(e)}
                        className="mx-2  text-center w-8 border-2 border-slate-500 rounded-lg cursor-pointer bg-zinc-300 text-slate-600 hover:bg-zinc-50"
                    >
                        L
                    </li>
                    <li
                        id={`size_XL`}
                        onClick={(e) => sizeSelectHandler(e)}
                        className="mx-2  text-center w-8 border-2 border-slate-500 rounded-lg cursor-pointer bg-zinc-300 text-slate-600 hover:bg-zinc-50"
                    >
                        XL
                    </li>
                </ul>
                <div className="flex justify-between my-2">
                    <span className="px-2 rounded bg-zinc-200/25">{product.price}$</span>
                    <p className="flex text-[10px] font-extralight">
                        <StarIcon
                            className={`w-4 h-4 ${product.rating.rate > 1 && "text-orange-300"}`}
                        />
                        <StarIcon
                            className={`w-4 h-4 ${product.rating.rate > 2 && "text-orange-300"}`}
                        />
                        <StarIcon
                            className={`w-4 h-4 ${product.rating.rate > 3 && "text-orange-300"}`}
                        />
                        <StarIcon
                            className={`w-4 h-4 ${product.rating.rate > 4 && "text-orange-300"}`}
                        />
                        <StarIcon
                            className={`w-4 h-4 ${product.rating.rate > 5 && "text-orange-300"}`}
                        />
                        {product.rating.count > 1000
                            ? `${Math.floor(product.rating.count / 100)}k`
                            : product.rating.count}
                    </p>
                </div>
                <button className="bg-green-500 text-white p-2" type="submit">
                    ADD TO CART
                </button>
            </Form>
        </Modal>
    );
}

export default Item;
